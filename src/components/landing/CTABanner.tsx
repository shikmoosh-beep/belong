import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-800 to-teal-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-teal-200">
          {t("subtitle")}
        </p>
        <Link
          href="/book"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-500 px-10 py-4 text-base font-bold text-teal-950 shadow-lg hover:bg-gold-400 transition-all hover:scale-105"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
