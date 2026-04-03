import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Creates a Morning payment link for a lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, packageName, track } = body;

    if (!leadId || !packageName || !track) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Verify lead exists
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .select("id, full_name, phone, email")
      .eq("id", leadId)
      .single();

    if (leadError || !lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    // Calculate amount based on package
    const pricing = calculatePricing(packageName, track);

    // TODO: Create Morning payment link via API
    // const morningResponse = await createMorningLink({
    //   amount: pricing.amountTotal,
    //   description: `Belong - ${packageName}`,
    //   customer: { name: lead.full_name, phone: lead.phone, email: lead.email },
    //   installments: track === "installments" ? pricing.installmentCount : 1,
    // });

    const morningLinkId = `mock_${Date.now()}`;
    const morningLinkUrl = `https://app.morning.co.il/payment/${morningLinkId}`;

    // Save payment record
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .insert({
        lead_id: leadId,
        package_name: packageName,
        track,
        amount_net: pricing.amountNet,
        amount_total: pricing.amountTotal,
        installment_count: pricing.installmentCount,
        morning_link_id: morningLinkId,
        morning_link_url: morningLinkUrl,
        status: "pending",
      })
      .select("id")
      .single();

    if (paymentError) {
      console.error("Payment creation error:", paymentError);
      return NextResponse.json({ error: "Failed to create payment" }, { status: 500 });
    }

    // Update lead status
    await supabase
      .from("leads")
      .update({ status: "payment_pending" })
      .eq("id", leadId);

    return NextResponse.json({
      paymentId: payment.id,
      paymentUrl: morningLinkUrl,
      amount: pricing.amountTotal,
      installments: pricing.installmentCount,
    });
  } catch (error) {
    console.error("Create payment link error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

function calculatePricing(packageName: string, track: string) {
  // Pricing table from PRD (amounts in agorot)
  const packages: Record<string, { net: number; singleTotal: number; installmentAmount: number; installmentCount: number }> = {
    "first_visa": { net: 998900, singleTotal: 1178700, installmentAmount: 229000, installmentCount: 6 },
    "humanitarian": { net: 998900, singleTotal: 1178700, installmentAmount: 229000, installmentCount: 6 },
    "asylum_initial": { net: 998900, singleTotal: 1178700, installmentAmount: 229000, installmentCount: 6 },
    "renewal_2a5": { net: 458900, singleTotal: 541500, installmentAmount: 219000, installmentCount: 3 },
    "work_to_resident": { net: 458900, singleTotal: 541500, installmentAmount: 219000, installmentCount: 3 },
    "resident_to_citizen": { net: 458900, singleTotal: 541500, installmentAmount: 219000, installmentCount: 3 },
    "tourist_invitation": { net: 458900, singleTotal: 541500, installmentAmount: 219000, installmentCount: 3 },
    "internal_appeal": { net: 558900, singleTotal: 659500, installmentAmount: 259000, installmentCount: 3 },
    "court_appeal": { net: 1298900, singleTotal: 1532700, installmentAmount: 349000, installmentCount: 6 },
  };

  const pkg = packages[packageName] || packages["first_visa"];

  if (track === "single") {
    return {
      amountNet: pkg.net,
      amountTotal: pkg.singleTotal,
      installmentCount: 1,
    };
  }

  return {
    amountNet: pkg.net,
    amountTotal: pkg.installmentAmount * pkg.installmentCount,
    installmentCount: pkg.installmentCount,
  };
}
