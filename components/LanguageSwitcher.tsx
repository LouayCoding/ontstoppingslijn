"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LOCALES = ["nl", "en"] as const;

const flags: Record<string, string> = {
  nl: "🇳🇱",
  en: "🇬🇧",
};

const labels: Record<string, string> = {
  nl: "NL",
  en: "EN",
};

export default function LanguageSwitcher({ iconOnly = false }: { iconOnly?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const detected = LOCALES.find((l) => pathname.startsWith(`/${l}`)) || "nl";
  const [locale, setLocale] = useState(detected);

  const switchLocale = (newLocale: typeof LOCALES[number]) => {
    setLocale(newLocale);
    const stripped = pathname.replace(/^\/(nl|en)/, "") || "/";
    const newPath = newLocale === "nl" ? stripped : `/${newLocale}${stripped}`;
    router.push(newPath);
  };

  const nextLocale = locale === "nl" ? "en" : "nl" as typeof LOCALES[number];

  if (iconOnly) {
    return (
      <button
        onClick={() => switchLocale(nextLocale)}
        aria-label={`Switch to ${labels[nextLocale]}`}
        className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
      >
        {locale === "nl" ? (
          <img src="https://flagcdn.com/w40/nl.png" alt="NL" width={20} height={15} className="rounded-sm" />
        ) : (
          <img src="https://flagcdn.com/w40/gb.png" alt="EN" width={20} height={15} className="rounded-sm" />
        )}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200 ${
            locale === loc
              ? "bg-accent text-foreground"
              : "text-muted hover:text-foreground hover:bg-surface"
          }`}
          aria-label={`Switch to ${labels[loc]}`}
        >
          <span className="text-base">{flags[loc]}</span>
          <span>{labels[loc]}</span>
        </button>
      ))}
    </div>
  );
}
