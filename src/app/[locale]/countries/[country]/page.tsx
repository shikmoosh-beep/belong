import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getCountryBySlug, getAllCountrySlugs } from "@/config/countries";
import { countryInfoMap } from "@/config/country-info";
import CountryHero from "@/components/countries/CountryHero";
import CountryInfoSection from "@/components/countries/CountryInfoSection";
import VisaTypesTable from "@/components/countries/VisaTypesTable";
import ImmigrationProcess from "@/components/countries/ImmigrationProcess";
import CountryCTA from "@/components/countries/CountryCTA";

export function generateStaticParams() {
  return getAllCountrySlugs().map((country) => ({ country }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country: countrySlug } = await params;
  setRequestLocale(locale);

  const country = getCountryBySlug(countrySlug);
  if (!country) notFound();

  const lang = locale as "he" | "en";
  const info = countryInfoMap[countrySlug];

  return (
    <>
      <CountryHero country={country} lang={lang} />
      {info && <CountryInfoSection info={info} lang={lang} />}
      <VisaTypesTable country={country} lang={lang} />
      <ImmigrationProcess country={country} lang={lang} />
      <CountryCTA lang={lang} />
    </>
  );
}
