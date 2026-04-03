import { useTranslations } from "next-intl";
import { ClipboardDocumentCheckIcon, PhoneArrowUpRightIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const steps = [
  { key: "step1", icon: ClipboardDocumentCheckIcon, color: "bg-teal-100 text-teal-700" },
  { key: "step2", icon: PhoneArrowUpRightIcon, color: "bg-gold-100 text-gold-700" },
  { key: "step3", icon: RocketLaunchIcon, color: "bg-teal-100 text-teal-700" },
];

export default function ProcessSteps() {
  const t = useTranslations("process");

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center text-teal-900">
          {t("title")}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.key} className="flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className={`flex items-center justify-center h-16 w-16 rounded-2xl ${step.color}`}>
                <step.icon className="h-8 w-8" />
              </div>
              <span className="mt-4 text-sm font-bold text-teal-500 tracking-wider uppercase">
                {i + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {t(`${step.key}Title`)}
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-sm">
                {t(`${step.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
