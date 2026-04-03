export type EligibilityResult = {
  status: "eligible" | "complex" | "not_eligible";
  reason: string;
};

type FormData = {
  currentStatus: string;
  yearsInIsrael: number;
  hasChildren: boolean;
  hasSpouse: boolean;
  hasWork: boolean;
};

/**
 * Eligibility routing rules.
 * Intentionally generous — most people route to "eligible" or "complex"
 * because the real screening happens during the consultation.
 * The form's primary purpose is lead capture + creating perceived exclusivity.
 */
export function evaluateEligibility(data: FormData): EligibilityResult {
  // Spouse of Israeli citizen — always eligible
  if (data.hasSpouse) {
    return { status: "eligible", reason: "spouse" };
  }

  // Has children born in Israel — eligible
  if (data.hasChildren) {
    return { status: "eligible", reason: "children" };
  }

  // Work visa wanting to upgrade — eligible
  if (data.currentStatus === "workVisa") {
    return { status: "eligible", reason: "work_visa_upgrade" };
  }

  // Long-term presence (5+ years) — eligible
  if (data.yearsInIsrael >= 5) {
    return { status: "eligible", reason: "long_term" };
  }

  // Asylum seeker — eligible (specific track)
  if (data.currentStatus === "asylum") {
    return { status: "eligible", reason: "asylum" };
  }

  // Overstay or no visa with some presence — complex but possible
  if (
    (data.currentStatus === "overstay" || data.currentStatus === "noVisa") &&
    data.yearsInIsrael >= 1
  ) {
    return { status: "complex", reason: "overstay_with_presence" };
  }

  // Tourist with work — complex
  if (data.currentStatus === "tourist" && data.hasWork) {
    return { status: "complex", reason: "tourist_working" };
  }

  // Short-term tourist without ties — complex (still worth a consultation)
  if (data.currentStatus === "tourist" && data.yearsInIsrael < 1) {
    return { status: "complex", reason: "short_term" };
  }

  // Default: complex — always worth a consultation
  return { status: "complex", reason: "general" };
}
