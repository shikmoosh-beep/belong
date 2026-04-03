import type { Country } from "@/config/countries";

export default function CountryHero({ country, lang }: { country: Country; lang: "he" | "en" }) {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 text-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl">{country.flag}</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold">
            {lang === "he" ? `הגירה ל${country.name.he}` : `Immigration to ${country.name.en}`}
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-teal-100 leading-relaxed max-w-3xl">
          {country.overview[lang]}
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <InfoCard label={lang === "he" ? "בירה" : "Capital"} value={country.capital} />
          <InfoCard label={lang === "he" ? "שפה" : "Language"} value={country.language} />
          <InfoCard label={lang === "he" ? "מטבע" : "Currency"} value={country.currency} />
          <InfoCard label={lang === "he" ? "רשות הגירה" : "Authority"} value={country.immigrationAuthority[lang]} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 rounded-xl p-4">
      <p className="text-xs text-teal-300 font-semibold uppercase tracking-wider">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
