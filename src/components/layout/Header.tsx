"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-teal-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-[family-name:var(--font-heading)] font-bold text-teal-900">
            Belong
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              {t("howItWorks")}
            </Link>
            <Link href="/#faq" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              {t("faq")}
            </Link>
            <Link href="/countries" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              {t("countries")}
            </Link>
            <LocaleSwitcher />
            <Link
              href="/book"
              className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              {t("bookCall")}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/#how-it-works"
              className="block text-sm text-gray-600 hover:text-teal-700"
              onClick={() => setMobileOpen(false)}
            >
              {t("howItWorks")}
            </Link>
            <Link
              href="/#faq"
              className="block text-sm text-gray-600 hover:text-teal-700"
              onClick={() => setMobileOpen(false)}
            >
              {t("faq")}
            </Link>
            <Link
              href="/countries"
              className="block text-sm text-gray-600 hover:text-teal-700"
              onClick={() => setMobileOpen(false)}
            >
              {t("countries")}
            </Link>
            <LocaleSwitcher />
            <Link
              href="/book"
              className="block rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white text-center hover:bg-teal-800"
              onClick={() => setMobileOpen(false)}
            >
              {t("bookCall")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-sm">
      <Link href={pathname} locale="he" className="text-gray-500 hover:text-teal-700">
        עב
      </Link>
      <span className="text-gray-300">|</span>
      <Link href={pathname} locale="en" className="text-gray-500 hover:text-teal-700">
        EN
      </Link>
    </div>
  );
}
