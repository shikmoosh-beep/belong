"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  DocumentTextIcon,
  DocumentCheckIcon,
  CloudArrowUpIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WHATSAPP_NUMBER = "972765384386";

const steps = [
  { key: "step1", icon: DocumentTextIcon, action: "#", done: false },
  { key: "step2", icon: DocumentCheckIcon, action: "#", done: false },
  { key: "step3", icon: CloudArrowUpIcon, action: "/documents", done: false, isLink: true },
  { key: "step4", icon: ChatBubbleLeftRightIcon, action: `https://wa.me/${WHATSAPP_NUMBER}`, done: false, isExternal: true },
];

export default function WelcomePage() {
  const t = useTranslations("welcome");

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 to-white min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              {step.done ? (
                <CheckCircleIcon className="h-8 w-8 text-teal-500 shrink-0" />
              ) : (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">
                  {i + 1}
                </div>
              )}

              <div className="flex-1">
                <p className={`font-semibold ${step.done ? "text-gray-400 line-through" : "text-gray-900"}`}>
                  {t(step.key)}
                </p>
              </div>

              {step.isLink ? (
                <Link
                  href={step.action}
                  className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-200 transition-colors"
                >
                  {t("uploadDocs")}
                </Link>
              ) : step.isExternal ? (
                <a
                  href={step.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-200 transition-colors"
                >
                  WhatsApp
                </a>
              ) : (
                <button className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-200 transition-colors">
                  {step.done ? "✓" : "→"}
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 bg-teal-50 rounded-xl p-4">
          {t("whatsappNote")}
        </p>
      </div>
    </div>
  );
}
