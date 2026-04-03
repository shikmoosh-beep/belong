import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import PaymentPage from "@/components/payment/PaymentPage";

export default async function Payment({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">...</div>}>
      <PaymentPage />
    </Suspense>
  );
}
