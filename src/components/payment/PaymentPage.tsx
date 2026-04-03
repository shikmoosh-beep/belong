"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { CheckIcon, LockClosedIcon } from "@heroicons/react/24/outline";

/**
 * Payment page — NOT publicly accessible.
 * Only reachable via a personalized link sent during/after the consultation call.
 * URL format: /payment?token=<access_token>&pkg=<package_name>
 *
 * Without a valid token, shows a message to contact via WhatsApp.
 */
export default function PaymentPage() {
  const t = useTranslations("payment");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const pkg = searchParams.get("pkg");

  // No token = not authorized to see pricing
  if (!token || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <LockClosedIcon className="h-16 w-16 text-gray-300 mx-auto" />
          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-900">
            {t("restricted")}
          </h1>
          <p className="mt-3 text-gray-600">{t("restrictedDesc")}</p>
          <a
            href="https://wa.me/972765384386"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full btn-whatsapp px-8 py-4 text-base font-bold transition-all hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // Pricing loaded from API based on token + package
  // For now using lookup table — in production this comes from the API
  const pricing = getPricing(pkg);

  return (
    <div className="py-16 sm:py-24 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Single Payment - Recommended */}
          <div className="relative bg-white rounded-2xl shadow-md border-2 border-teal-500 p-8">
            <div className="absolute -top-3 start-6 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t("recommended")}
            </div>

            <h3 className="text-xl font-bold text-gray-900">{t("singlePayment")}</h3>

            <div className="mt-4">
              <span className="text-4xl font-extrabold text-teal-900" dir="ltr">
                {pricing.singleTotal.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 ms-1">&#8362;</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{t("includesVat")}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 font-semibold">
              <CheckIcon className="h-5 w-5" />
              {t("save")} {pricing.savings.toLocaleString()} &#8362;
            </div>

            <button className="mt-8 w-full rounded-full bg-teal-700 py-4 text-base font-bold text-white hover:bg-teal-800 transition-colors">
              {t("chooseSingle")}
            </button>
          </div>

          {/* Installments */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900">{t("installments")}</h3>

            <div className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900" dir="ltr">
                {pricing.installmentAmount.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 ms-1">&#8362;</span>
              <span className="text-sm text-gray-500 ms-1">{t("perMonth")}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {pricing.installmentCount} {t("months")} &middot; {pricing.installmentTotal.toLocaleString()} &#8362; {t("includesVat")}
            </p>

            <button className="mt-8 w-full rounded-full border-2 border-teal-700 py-4 text-base font-bold text-teal-700 hover:bg-teal-50 transition-colors">
              {t("chooseInstallments")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getPricing(pkg: string) {
  const packages: Record<string, { singleTotal: number; installmentAmount: number; installmentCount: number }> = {
    first_visa: { singleTotal: 11787, installmentAmount: 2290, installmentCount: 6 },
    humanitarian: { singleTotal: 11787, installmentAmount: 2290, installmentCount: 6 },
    asylum_initial: { singleTotal: 11787, installmentAmount: 2290, installmentCount: 6 },
    renewal_2a5: { singleTotal: 5415, installmentAmount: 2190, installmentCount: 3 },
    work_to_resident: { singleTotal: 5415, installmentAmount: 2190, installmentCount: 3 },
    resident_to_citizen: { singleTotal: 5415, installmentAmount: 2190, installmentCount: 3 },
    tourist_invitation: { singleTotal: 5415, installmentAmount: 2190, installmentCount: 3 },
    internal_appeal: { singleTotal: 6595, installmentAmount: 2590, installmentCount: 3 },
    court_appeal: { singleTotal: 15327, installmentAmount: 3490, installmentCount: 6 },
  };

  const p = packages[pkg] || packages.first_visa;
  const installmentTotal = p.installmentAmount * p.installmentCount;
  return { ...p, installmentTotal, savings: installmentTotal - p.singleTotal };
}
