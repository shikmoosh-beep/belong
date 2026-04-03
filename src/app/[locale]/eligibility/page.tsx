import { setRequestLocale } from "next-intl/server";
import EligibilityForm from "@/components/eligibility/EligibilityForm";

export default async function EligibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-16 sm:py-24 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <EligibilityForm />
      </div>
    </div>
  );
}
