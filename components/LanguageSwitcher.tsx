"use client";

import { useTranslation, type Locale } from "@/lib/i18n-context";

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "nl", label: "NL", flag: "nl" },
  { code: "en", label: "EN", flag: "gb" },
];

export default function LanguageSwitcher({ iconOnly = false }: { iconOnly?: boolean }) {
  const { locale, setLocale } = useTranslation();

  const nextLocale = locale === "nl" ? "en" : "nl";
  const current = LOCALES.find((l) => l.code === locale)!;
  const next = LOCALES.find((l) => l.code === nextLocale)!;

  if (iconOnly) {
    return (
      <button
        onClick={() => setLocale(nextLocale)}
        aria-label={`Switch to ${next.label}`}
        className="w-11 h-11 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
      >
        <img src={`https://flagcdn.com/w40/${current.flag}.png`} alt={current.label} width={20} height={15} className="rounded-sm" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setLocale(nextLocale)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition-colors duration-200"
      aria-label={`Switch to ${next.label}`}
    >
      <img
        src={`https://flagcdn.com/w40/${current.flag}.png`}
        alt={current.label}
        width={16}
        height={12}
        className="rounded-sm"
      />
      <span>{current.label}</span>
    </button>
  );
}
