"use client";

import { useTranslations } from "next-intl";
import Cal from "@calcom/embed-react";
import { useLocale } from "next-intl";

const CAL_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;
const WHATSAPP_NUMBER = "972765384386";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to book a consultation")}`;

function getCalLink(url: string): string {
  // Extract the path from full cal.com URL (e.g. "shikma-aharon-david-emqwg1/30min")
  const match = url.match(/cal\.com\/(.+)/);
  return match ? match[1] : url;
}

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

        {CAL_URL ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-2">
            <Cal
              calLink={getCalLink(CAL_URL)}
              style={{ width: "100%", height: "650px", overflow: "auto" }}
              config={{
                theme: "light",
                layout: "month_view",
              }}
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
