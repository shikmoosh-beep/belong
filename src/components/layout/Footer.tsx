import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl italic text-teal-200">
            {t("tagline")}
          </p>
          <div className="flex gap-6 text-sm text-teal-400">
            <a href="#" className="hover:text-white transition-colors">{t("privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("terms")}</a>
          </div>
          <p className="text-sm text-teal-500">
            &copy; {year} Belong. {t("rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
