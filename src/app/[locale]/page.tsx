import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSteps from "@/components/landing/ProcessSteps";
import WhyBelong from "@/components/landing/WhyBelong";
import FAQSection from "@/components/landing/FAQSection";
import CTABanner from "@/components/landing/CTABanner";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ProcessSteps />
      <WhyBelong />
      <FAQSection />
      <CTABanner />
    </>
  );
}
