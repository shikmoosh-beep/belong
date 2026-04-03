import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Receives events from Calendly when a consultation is booked/cancelled
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Verify Calendly webhook signature
    // const signature = request.headers.get("Calendly-Webhook-Signature");

    const event = body.event;
    const payload = body.payload;

    if (!event || !payload) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const supabase = createAdminClient();

    if (event === "invitee.created") {
      const email = payload.email;
      const name = payload.name;
      const phone = payload.questions_and_answers?.find(
        (q: { question: string }) => q.question.toLowerCase().includes("phone")
      )?.answer;
      const scheduledAt = payload.event?.start_time;
      const calendlyEventId = payload.event?.uri;
      const calendlyInviteeId = payload.uri;

      // Try to find existing lead by phone or email
      let leadId: string | null = null;

      if (phone) {
        const { data } = await supabase
          .from("leads")
          .select("id")
          .eq("phone", phone.replace(/\D/g, ""))
          .single();
        if (data) leadId = data.id;
      }

      if (!leadId && email) {
        const { data } = await supabase
          .from("leads")
          .select("id")
          .eq("email", email)
          .single();
        if (data) leadId = data.id;
      }

      // Create new lead if not found
      if (!leadId) {
        const { data: newLead } = await supabase
          .from("leads")
          .insert({
            full_name: name || "Unknown",
            phone: phone || "",
            email,
            source: "calendly",
            status: "consultation_booked",
          })
          .select("id")
          .single();
        leadId = newLead?.id || null;
      } else {
        // Update existing lead status
        await supabase
          .from("leads")
          .update({ status: "consultation_booked" })
          .eq("id", leadId);
      }

      if (leadId) {
        await supabase.from("consultations").insert({
          lead_id: leadId,
          calendly_event_id: calendlyEventId,
          calendly_invitee_id: calendlyInviteeId,
          scheduled_at: scheduledAt,
          status: "scheduled",
        });
      }
    }

    if (event === "invitee.canceled") {
      const calendlyInviteeId = payload.uri;

      await supabase
        .from("consultations")
        .update({ status: "cancelled" })
        .eq("calendly_invitee_id", calendlyInviteeId);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Calendly webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
