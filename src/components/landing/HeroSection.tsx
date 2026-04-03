"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PhoneIcon, ChatBubbleLeftRightIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const WHATSAPP_NUMBER = "972765384386";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to know more about Belong")}`;

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 text-white">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -end-40 h-96 w-96 rounded-full bg-teal-700/30 blur-3xl" />
        <div className="absolute -bottom-40 -start-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {t("headline")}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-teal-100 leading-relaxed max-w-2xl mx-auto">
            {t("subheadline")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA 1 - Primary: Book Call */}
            <Link
              href="/book"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-teal-950 shadow-lg hover:bg-gold-400 transition-all hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              {t("cta1")}
            </Link>

            {/* CTA 2 - WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full btn-whatsapp px-8 py-4 text-base font-bold shadow-lg transition-all hover:scale-105"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              {t("cta2")}
            </a>

            {/* CTA 3 - Questionnaire */}
            <Link
              href="/eligibility"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-teal-200 hover:text-white underline underline-offset-4 text-base transition-colors"
            >
              <DocumentTextIcon className="h-5 w-5" />
              {t("cta3")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
