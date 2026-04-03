"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
  const t = useTranslations("welcome");
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/welcome");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-white px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircleIcon className="h-24 w-24 text-teal-500 mx-auto" />
        </motion.div>

        <h1 className="mt-8 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-teal-900">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          {t("whatsappNote")}
        </p>
        <p className="mt-6 text-sm text-gray-400">
          {countdown > 0 ? `Redirecting in ${countdown}...` : "Redirecting..."}
        </p>
      </motion.div>
    </div>
  );
}
