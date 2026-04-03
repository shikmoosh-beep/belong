import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { evaluateEligibility } from "@/config/eligibility-rules";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, country, yearsInIsrael, currentStatus, hasChildren, hasSpouse, hasWork, additionalInfo } = body;

    if (!fullName || !phone || !currentStatus) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = evaluateEligibility({
      currentStatus,
      yearsInIsrael: Number(yearsInIsrael),
      hasChildren: Boolean(hasChildren),
      hasSpouse: Boolean(hasSpouse),
      hasWork: Boolean(hasWork),
    });

    const supabase = createAdminClient();

    // Create or find lead
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .insert({
        full_name: fullName,
        phone,
        email: email || null,
        source: "eligibility_form",
        status: result.status === "not_eligible" ? "not_eligible" : result.status,
      })
      .select("id, access_token")
      .single();

    if (leadError) {
      console.error("Lead creation error:", leadError);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    // Save eligibility submission
    await supabase.from("eligibility_submissions").insert({
      lead_id: lead.id,
      full_name: fullName,
      phone,
      email: email || null,
      country,
      current_status: currentStatus,
      years_in_israel: Number(yearsInIsrael),
      has_children: Boolean(hasChildren),
      has_spouse: Boolean(hasSpouse),
      has_work: Boolean(hasWork),
      additional_info: additionalInfo || null,
      result: result.status,
      result_reason: result.reason,
    });

    return NextResponse.json({
      result: result.status,
      reason: result.reason,
      leadId: lead.id,
      accessToken: lead.access_token,
    });
  } catch (error) {
    console.error("Eligibility API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
