import { setRequestLocale } from "next-intl/server";
import PaymentSuccess from "@/components/payment/PaymentSuccess";

export default async function SuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PaymentSuccess />;
}
