import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/heic"];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = formData.get("category") as string | null;
    const accessToken = formData.get("accessToken") as string | null;

    if (!file || !category || !accessToken) {
      return NextResponse.json({ error: "Missing file, category, or accessToken" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Verify access token and get lead
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .select("id")
      .eq("access_token", accessToken)
      .single();

    if (leadError || !lead) {
      return NextResponse.json({ error: "Invalid access token" }, { status: 403 });
    }

    // Upload to Supabase Storage
    const fileName = `${lead.id}/${category}/${Date.now()}_${file.name}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("client-documents")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    // Save document record
    const { data: doc, error: docError } = await supabase
      .from("documents")
      .insert({
        lead_id: lead.id,
        category,
        file_name: file.name,
        file_size: file.size,
        mime_type: file.type,
        storage_path: fileName,
      })
      .select("id")
      .single();

    if (docError) {
      console.error("Document record error:", docError);
      return NextResponse.json({ error: "Failed to save record" }, { status: 500 });
    }

    return NextResponse.json({ success: true, documentId: doc.id });
  } catch (error) {
    console.error("Document upload error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
