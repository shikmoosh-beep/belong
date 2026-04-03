"use client";

import type { CountryInfo } from "@/config/countries";
import {
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon,
  HeartIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function CountryInfoSection({ info, lang }: { info: CountryInfo; lang: "he" | "en" }) {
  return (
    <>
      {/* Stats Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900 text-center">
            <ChartBarIcon className="h-8 w-8 inline-block me-2 text-teal-600" />
            {lang === "he" ? "נתונים ומספרים" : "Key Facts & Figures"}
          </h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {info.stats.map((stat, i) => (
              <div key={i} className="bg-teal-50 rounded-xl p-5 text-center">
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{stat.label[lang]}</p>
                <p className="mt-2 text-xl font-bold text-teal-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900 text-center">
            {lang === "he" ? "יתרונות וחסרונות" : "Pros & Cons"}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-white rounded-2xl p-6 border border-teal-100">
              <h3 className="text-lg font-bold text-teal-700 flex items-center gap-2 mb-4">
                <CheckCircleIcon className="h-6 w-6" />
                {lang === "he" ? "יתרונות" : "Pros"}
              </h3>
              <ul className="space-y-3">
                {info.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-teal-500 mt-0.5 shrink-0">✓</span>
                    {pro[lang]}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-white rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2 mb-4">
                <XCircleIcon className="h-6 w-6" />
                {lang === "he" ? "חסרונות" : "Cons"}
              </h3>
              <ul className="space-y-3">
                {info.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {con[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare & Cost of Living */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-teal-900 flex items-center gap-2 mb-3">
                <HeartIcon className="h-6 w-6 text-teal-600" />
                {lang === "he" ? "מערכת בריאות" : "Healthcare"}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{info.healthcareNote[lang]}</p>
            </div>
            <div className="bg-gold-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-teal-900 flex items-center gap-2 mb-3">
                <BanknotesIcon className="h-6 w-6 text-gold-600" />
                {lang === "he" ? "עלויות חיים" : "Cost of Living"}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{info.costOfLiving[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 sm:py-20 bg-teal-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-teal-900 text-center flex items-center justify-center gap-2">
            <SparklesIcon className="h-7 w-7 text-gold-500" />
            {lang === "he" ? "עובדות מעניינות" : "Fun Facts"}
          </h2>
          <div className="mt-8 space-y-4">
            {info.funFacts.map((fact, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-teal-100 flex items-start gap-3">
                <span className="text-2xl shrink-0">{["💡", "📊", "🌍"][i % 3]}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{fact[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
