import { setRequestLocale } from "next-intl/server";
import { countries } from "@/config/countries";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export default async function CountriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
            {locale === "he" ? "מדינות הגירה" : "Immigration Destinations"}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === "he"
              ? "מידע מקיף על תהליכי הגירה, סוגי אשרות, ודרישות כניסה במדינות מובילות."
              : "Comprehensive information on immigration processes, visa types, and entry requirements in leading countries."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <span className="text-5xl">{country.flag}</span>
              <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                {country.name[locale as "he" | "en"]}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {country.visaTypes.length} {locale === "he" ? "סוגי אשרות" : "visa types"}
              </p>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {country.overview[locale as "he" | "en"]}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                {locale === "he" ? "מידע נוסף →" : "Learn more →"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
