import { Link } from "@/i18n/navigation";

export default function CountryCTA({ lang }: { lang: "he" | "en" }) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-800 to-teal-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold">
          {lang === "he" ? "צריך עזרה עם ההגירה?" : "Need Help with Immigration?"}
        </h2>
        <p className="mt-4 text-lg text-teal-200">
          {lang === "he"
            ? "צוות Belong מלווה אותך בכל שלב — מהבנת הזכאות ועד קבלת המעמד."
            : "The Belong team guides you every step — from understanding eligibility to obtaining status."}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-teal-950 hover:bg-gold-400 transition-all hover:scale-105"
          >
            {lang === "he" ? "קבע שיחת ייעוץ" : "Book a Consultation"}
          </Link>
          <Link
            href="/eligibility"
            className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
          >
            {lang === "he" ? "בדוק התאמה" : "Check Eligibility"}
          </Link>
        </div>
      </div>
    </section>
  );
}
