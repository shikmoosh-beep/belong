"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "@/i18n/navigation";
import ResultScreen from "./ResultScreen";
import { evaluateEligibility, type EligibilityResult } from "@/config/eligibility-rules";

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email().optional().or(z.literal("")),
  country: z.string().min(2),
  yearsInIsrael: z.preprocess((v) => Number(v), z.number().min(0).max(50)),
  currentStatus: z.string().min(1),
  hasChildren: z.boolean(),
  hasSpouse: z.boolean(),
  hasWork: z.boolean(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function EligibilityForm() {
  const t = useTranslations("eligibility");
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      hasChildren: false,
      hasSpouse: false,
      hasWork: false,
    },
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    // Evaluate locally for instant feedback
    const eligibilityResult = evaluateEligibility(data as unknown as FormData);
    setResult(eligibilityResult);

    // Also save to API/DB in background
    try {
      await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Don't block UX if API fails
    }
  };

  if (result) {
    return <ResultScreen result={result} />;
  }

  const statusOptions = [
    "tourist",
    "overstay",
    "asylum",
    "workVisa",
    "spouseVisa",
    "noVisa",
    "other",
  ] as const;

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
          {t("title")}
        </h1>
        <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("name")} *
          </label>
          <input
            {...register("fullName")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{t("name")}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("phone")} *
          </label>
          <input
            {...register("phone")}
            type="tel"
            dir="ltr"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
            placeholder="+972"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{t("phone")}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("email")}
          </label>
          <input
            {...register("email")}
            type="email"
            dir="ltr"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("country")} *
          </label>
          <input
            {...register("country")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
          />
          {errors.country && (
            <p className="mt-1 text-sm text-red-500">{t("country")}</p>
          )}
        </div>

        {/* Years in Israel */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("yearsInIsrael")} *
          </label>
          <input
            {...register("yearsInIsrael")}
            type="number"
            dir="ltr"
            min={0}
            max={50}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
          />
          {errors.yearsInIsrael && (
            <p className="mt-1 text-sm text-red-500">{t("yearsInIsrael")}</p>
          )}
        </div>

        {/* Current Status */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("currentStatus")} *
          </label>
          <select
            {...register("currentStatus")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition bg-white"
          >
            <option value="">---</option>
            {statusOptions.map((opt) => (
              <option key={opt} value={opt}>
                {t(`statusOptions.${opt}`)}
              </option>
            ))}
          </select>
          {errors.currentStatus && (
            <p className="mt-1 text-sm text-red-500">{t("currentStatus")}</p>
          )}
        </div>

        {/* Toggle questions */}
        <div className="space-y-4">
          <ToggleField label={t("hasChildren")} register={register("hasChildren")} t={t} />
          <ToggleField label={t("hasSpouse")} register={register("hasSpouse")} t={t} />
          <ToggleField label={t("hasWork")} register={register("hasWork")} t={t} />
        </div>

        {/* Additional Info */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {t("additionalInfo")}
          </label>
          <textarea
            {...register("additionalInfo")}
            rows={3}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-teal-700 py-4 text-base font-bold text-white hover:bg-teal-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "..." : t("submit")}
        </button>
      </form>
    </div>
  );
}

function ToggleField({
  label,
  register,
  t,
}: {
  label: string;
  register: ReturnType<typeof useForm>["register"] extends (...args: infer A) => infer R ? R : never;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" {...register} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-teal-500/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600" />
      </label>
    </div>
  );
}
