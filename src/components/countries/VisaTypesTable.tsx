"use client";

import { useState } from "react";
import type { Country, VisaType } from "@/config/countries";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function VisaTypesTable({ country, lang }: { country: Country; lang: "he" | "en" }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900 text-center">
          {lang === "he" ? "סוגי אשרות" : "Visa Types"}
        </h2>
        <p className="mt-3 text-center text-gray-600">
          {lang === "he"
            ? `${country.visaTypes.length} מסלולי הגירה עיקריים ל${country.name.he}`
            : `${country.visaTypes.length} main immigration pathways to ${country.name.en}`}
        </p>

        <div className="mt-12 space-y-4">
          {country.visaTypes.map((visa, i) => (
            <VisaCard key={i} visa={visa} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisaCard({ visa, lang }: { visa: VisaType; lang: "he" | "en" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-200 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-start"
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{visa.name[lang]}</h3>
          <div className="flex items-center gap-2 mt-1">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">{visa.duration}</span>
          </div>
        </div>
        <ChevronDownIcon className={`h-5 w-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-600 leading-relaxed">{visa.description[lang]}</p>

          <h4 className="mt-4 text-sm font-bold text-gray-700 uppercase tracking-wider">
            {lang === "he" ? "דרישות" : "Requirements"}
          </h4>
          <ul className="mt-2 space-y-2">
            {visa.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-teal-500 mt-0.5">•</span>
                {req[lang]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
