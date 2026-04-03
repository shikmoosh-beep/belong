"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import type { EligibilityResult } from "@/config/eligibility-rules";

const WHATSAPP_NUMBER = "972765384386";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function ResultScreen({ result }: { result: EligibilityResult }) {
  const t = useTranslations();

  if (result.status === "eligible") {
    return (
      <div className="text-center py-12">
        <CheckCircleIcon className="h-20 w-20 text-teal-500 mx-auto" />
        <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold text-teal-900">
          {t("hero.headline")}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          יש לנו מסלול שמתאים למצב שלך. בוא לשיחה אישית ונסביר לך את כל השלבים.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-teal-950 hover:bg-gold-400 transition-all"
          >
            {t("hero.cta1")}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full btn-whatsapp px-8 py-4 text-base font-bold transition-all"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>
    );
  }

  if (result.status === "complex") {
    return (
      <div className="text-center py-12">
        <ExclamationTriangleIcon className="h-20 w-20 text-gold-500 mx-auto" />
        <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold text-teal-900">
          המקרה שלך דורש תשומת לב אישית
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          המצב שלך מורכב קצת יותר, אבל בהחלט אפשרי. בוא נדבר ונמצא את הדרך הכי טובה.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-teal-950 hover:bg-gold-400 transition-all"
          >
            {t("hero.cta1")}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full btn-whatsapp px-8 py-4 text-base font-bold transition-all"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>
    );
  }

  // not_eligible — currently not reachable, but here for safety
  return (
    <div className="text-center py-12">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gray-900">
        תודה על הפנייה
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
        לצערנו, במצב הנוכחי אנחנו לא יכולים לעזור ישירות. אבל אנחנו ממליצים לפנות לייעוץ משפטי.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-teal-700 px-8 py-4 text-base font-bold text-white hover:bg-teal-800 transition-all"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
}
