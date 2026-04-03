import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Receives delivery status updates and incoming messages from 360dialog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const supabase = createAdminClient();

    // Handle status updates
    const statuses = body.entry?.[0]?.changes?.[0]?.value?.statuses;
    if (statuses) {
      for (const status of statuses) {
        await supabase
          .from("whatsapp_messages")
          .update({ status: status.status })
          .eq("whatsapp_message_id", status.id);
      }
    }

    // Handle incoming messages
    const messages = body.entry?.[0]?.changes?.[0]?.value?.messages;
    if (messages) {
      for (const msg of messages) {
        const phone = msg.from;
        const text = msg.text?.body || msg.type;

        // Find lead by phone
        const { data: lead } = await supabase
          .from("leads")
          .select("id")
          .eq("phone", phone)
          .single();

        if (lead) {
          await supabase.from("whatsapp_messages").insert({
            lead_id: lead.id,
            direction: "inbound",
            message_body: text,
            whatsapp_message_id: msg.id,
            status: "delivered",
          });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
