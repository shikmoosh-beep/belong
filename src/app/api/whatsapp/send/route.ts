import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendWhatsAppTemplate, sendWhatsAppText } from "@/lib/whatsapp";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, templateName, text, languageCode } = body;

    if (!leadId || (!templateName && !text)) {
      return NextResponse.json({ error: "Missing leadId and message content" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Get lead phone
    const { data: lead, error } = await supabase
      .from("leads")
      .select("phone, preferred_language")
      .eq("id", leadId)
      .single();

    if (error || !lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    let messageId: string | null = null;

    if (templateName) {
      messageId = await sendWhatsAppTemplate({
        to: lead.phone,
        templateName,
        languageCode: languageCode || lead.preferred_language || "he",
      });
    } else if (text) {
      messageId = await sendWhatsAppText(lead.phone, text);
    }

    // Log message
    await supabase.from("whatsapp_messages").insert({
      lead_id: leadId,
      direction: "outbound",
      template_name: templateName || null,
      message_body: text || null,
      whatsapp_message_id: messageId,
      status: "sent",
    });

    return NextResponse.json({ success: true, messageId });
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
