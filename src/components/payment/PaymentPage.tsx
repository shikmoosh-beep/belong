"use client";

import { useTranslations } from "next-intl";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function PaymentPage() {
  const t = useTranslations("payment");

  // These would come from the API based on the client's package
  // For now showing a sample package
  const singleAmount = 11787;
  const installmentAmount = 2290;
  const installmentCount = 6;
  const installmentTotal = installmentAmount * installmentCount;
  const savings = installmentTotal - singleAmount;

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
                {singleAmount.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 ms-1">&#8362;</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{t("includesVat")}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 font-semibold">
              <CheckIcon className="h-5 w-5" />
              {t("save")} {savings.toLocaleString()} &#8362;
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
                {installmentAmount.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 ms-1">&#8362;</span>
              <span className="text-sm text-gray-500 ms-1">{t("perMonth")}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {installmentCount} {t("months")} &middot; {installmentTotal.toLocaleString()} &#8362; {t("includesVat")}
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
