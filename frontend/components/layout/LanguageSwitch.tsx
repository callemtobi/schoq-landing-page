"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { setUserLocale } from "../../lib/locale";
import { Locale } from "../../i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const onSelect = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      setUserLocale(next);
    });
  };

  return (
    <div
      className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600 shadow-[inset_0_1px_8px_rgba(0,0,0,0.15)] px-3 py-1.5 rounded-lg backdrop-blur-sm"
      aria-label="Language selector"
    >
      <button
        onClick={() => onSelect("de")}
        disabled={isPending}
        aria-pressed={locale === "de"}
        className={`transition-colors disabled:opacity-50 ${
          locale === "de"
            ? "text-gray-900 font-semibold"
            : "hover:text-gray-900"
        }`}
      >
        DE
      </button>
      <span className="text-gray-400 select-none">/</span>
      <button
        onClick={() => onSelect("en")}
        disabled={isPending}
        aria-pressed={locale === "en"}
        className={`transition-colors disabled:opacity-50 ${
          locale === "en"
            ? "text-gray-900 font-semibold"
            : "hover:text-gray-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
