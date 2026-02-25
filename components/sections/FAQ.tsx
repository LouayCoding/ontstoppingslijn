"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

const FAQ_COUNT = 5;

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[720px] px-6">
        <SectionHeader
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
        />

        <div className="bg-white rounded-2xl border border-divider/50 overflow-hidden reveal-stagger">
          {Array.from({ length: FAQ_COUNT }).map((_, i) => (
            <div
              key={i}
              className={i < FAQ_COUNT - 1 ? "border-b border-divider/50" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-base font-medium pr-8 group-hover:text-accent transition-colors duration-200">
                  {t(`faqItems.${i}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-muted leading-relaxed px-6 pb-5 max-w-[55ch]">
                    {t(`faqItems.${i}.answer`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
