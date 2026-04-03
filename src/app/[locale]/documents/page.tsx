import { setRequestLocale } from "next-intl/server";
import DocumentsPage from "@/components/documents/DocumentsPage";

export default async function Documents({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DocumentsPage />;
}
