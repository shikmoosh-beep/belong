import { useTranslations } from "next-intl";
import { HeartIcon, ShieldCheckIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const reasons = [
  { key: "reason1", icon: HeartIcon },
  { key: "reason2", icon: ShieldCheckIcon },
  { key: "reason3", icon: ChatBubbleBottomCenterTextIcon },
];

export default function WhyBelong() {
  const t = useTranslations("whyBelong");

  return (
    <section className="py-20 sm:py-28 bg-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center text-teal-900">
          {t("title")}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.key}
              className="bg-white rounded-2xl p-8 shadow-sm border border-teal-100 hover:shadow-md transition-shadow"
            >
              <reason.icon className="h-10 w-10 text-gold-500" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {t(`${reason.key}Title`)}
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {t(`${reason.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
