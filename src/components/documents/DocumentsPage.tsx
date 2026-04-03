"use client";

import { useTranslations } from "next-intl";
import DocumentCategory from "./DocumentCategory";
import {
  IdentificationIcon,
  CameraIcon,
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { key: "passport", icon: IdentificationIcon },
  { key: "photos", icon: CameraIcon },
  { key: "residency", icon: HomeIcon },
  { key: "employment", icon: BriefcaseIcon },
  { key: "children", icon: UserGroupIcon },
  { key: "other", icon: FolderPlusIcon },
];

export default function DocumentsPage() {
  const t = useTranslations("documents");

  return (
    <div className="py-16 sm:py-24 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <DocumentCategory key={cat.key} categoryKey={cat.key} Icon={cat.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
