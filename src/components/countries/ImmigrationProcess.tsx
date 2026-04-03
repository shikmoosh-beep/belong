import type { Country } from "@/config/countries";

export default function ImmigrationProcess({ country, lang }: { country: Country; lang: "he" | "en" }) {
  return (
    <section className="py-20 sm:py-28 bg-teal-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900 text-center">
          {lang === "he" ? "תהליך ההגירה" : "Immigration Process"}
        </h2>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute start-6 top-0 bottom-0 w-0.5 bg-teal-200 hidden sm:block" />

          <div className="space-y-8">
            {country.process.map((step, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Step number */}
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg shrink-0 z-10">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100 flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{step.title[lang]}</h3>
                  <p className="mt-2 text-gray-600">{step.description[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
