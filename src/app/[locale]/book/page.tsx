import { setRequestLocale } from "next-intl/server";
import BookingPage from "@/components/booking/BookingPage";

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BookingPage />;
}
