import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendWhatsAppTemplate } from "@/lib/whatsapp";

/**
 * CRITICAL: Payment webhook — orchestration hub
 *
 * When Morning/Tranzila confirms payment:
 * 1. Verify webhook signature
 * 2. Update payment status
 * 3. Update lead status
 * 4. Send WhatsApp welcome message (ZERO DELAY)
 * 5. Trigger HelloSign signature requests
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Verify webhook signature from Morning/Tranzila
    // const signature = request.headers.get("x-webhook-signature");

    const { payment_id, status, transaction_id } = body;

    if (!payment_id || status !== "completed") {
      return NextResponse.json({ received: true });
    }

    const supabase = createAdminClient();

    // 1. Update payment
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .update({
        status: "completed",
        tranzila_transaction_id: transaction_id,
        paid_at: new Date().toISOString(),
      })
      .eq("morning_link_id", payment_id)
      .select("id, lead_id")
      .single();

    if (paymentError || !payment) {
      console.error("Payment update error:", paymentError);
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    // 2. Update lead status
    await supabase
      .from("leads")
      .update({ status: "payment_complete" })
      .eq("id", payment.lead_id);

    // 3. Get lead details for WhatsApp
    const { data: lead } = await supabase
      .from("leads")
      .select("phone, full_name, access_token, preferred_language")
      .eq("id", payment.lead_id)
      .single();

    if (lead) {
      // 4. ZERO DELAY: Send WhatsApp welcome message
      try {
        const messageId = await sendWhatsAppTemplate({
          to: lead.phone,
          templateName: "belong_welcome",
          languageCode: lead.preferred_language || "he",
        });

        // Log WhatsApp message
        await supabase.from("whatsapp_messages").insert({
          lead_id: payment.lead_id,
          direction: "outbound",
          template_name: "belong_welcome",
          whatsapp_message_id: messageId,
          status: "sent",
        });

        // Update payment with WhatsApp timestamp
        await supabase
          .from("payments")
          .update({ whatsapp_sent_at: new Date().toISOString() })
          .eq("id", payment.id);
      } catch (whatsappError) {
        console.error("WhatsApp send failed:", whatsappError);
        // Don't fail the webhook — log and continue
      }

      // 5. TODO: Trigger HelloSign signature requests
      // await sendHelloSignRequest(lead, "power_of_attorney");
      // await sendHelloSignRequest(lead, "fee_agreement");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Payment webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
