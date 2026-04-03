"use client";

import { useTranslations } from "next-intl";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqKeys = ["q1", "q2", "q3", "q4", "q5"];

export default function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center text-teal-900">
          {t("title")}
        </h2>

        <div className="mt-12 divide-y divide-teal-100">
          {faqKeys.map((key) => (
            <Disclosure as="div" key={key} className="py-5">
              <DisclosureButton className="group flex w-full items-center justify-between text-start">
                <span className="text-base font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {t(key)}
                </span>
                <ChevronDownIcon className="h-5 w-5 text-gray-400 group-data-[open]:rotate-180 transition-transform" />
              </DisclosureButton>
              <DisclosurePanel className="mt-3 text-base text-gray-600 leading-relaxed">
                {t(key.replace("q", "a"))}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
