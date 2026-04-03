"use client";

import { useTranslations } from "next-intl";
import { InlineWidget } from "react-calendly";
import { useLocale } from "next-intl";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;
const WHATSAPP_NUMBER = "972765384386";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to book a consultation")}`;

export default function BookingPage() {
  const t = useTranslations("book");
  const locale = useLocale();

  return (
    <div className="py-16 sm:py-24 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        {CALENDLY_URL ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "650px", minWidth: "320px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                primaryColor: "0f766e",
                textColor: "134e4a",
              }}
              prefill={{}}
            />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <p className="text-gray-600 text-lg mb-6">{t("noCalendly")}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full btn-whatsapp px-8 py-4 text-base font-bold transition-all hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
