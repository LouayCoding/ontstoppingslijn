"use client";

import { useTranslation } from "@/lib/i18n-context";

export default function TrustStrip() {
  const { t } = useTranslation();

  const STATS = [
    { value: "5.000+", label: t("trustStrip.blockagesSolved") },
    { value: "4.9/5", label: t("trustStrip.customerRating") },
    { value: "24/7", label: t("trustStrip.emergencyService") },
    { value: "100%", label: t("trustStrip.professional") },
  ];

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center border border-divider/50"
            >
              <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
