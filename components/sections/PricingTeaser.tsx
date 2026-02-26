"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

const FEATURED = SERVICES.slice(0, 3);

export default function PricingTeaser() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={t("pricingTeaser.eyebrow")}
          title={t("pricingTeaser.title")}
          subtitle={t("pricingTeaser.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal-stagger">
          {FEATURED.map((service, i) => (
            <div
              key={service.slug}
              className={`bg-white rounded-2xl p-8 border hover-lift ${
                i === 1
                  ? "border-accent/30 ring-1 ring-accent/10"
                  : "border-divider/50"
              }`}
            >
              <h3 className="text-lg font-heading font-semibold mb-2">
                {t(`servicesList.${service.slug}.title`)}
              </h3>
              <p className="text-3xl font-heading font-bold text-accent mb-6">
                €{service.price}
                <span className="text-sm font-body text-muted font-normal ml-1">
                  {t("pricingTeaser.from")}
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {service.details.map((d, di) => (
                  <li
                    key={di}
                    className="flex items-baseline justify-between text-sm"
                  >
                    <span className="text-muted">{t(`servicesList.${service.slug}.details.${di}.label`)}</span>
                    <span className="text-foreground font-medium">
                      {t(`servicesList.${service.slug}.details.${di}.price`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 reveal">
          <Link
            href="/tarieven"
            className="inline-flex items-center justify-center border border-divider text-foreground font-medium text-sm px-6 py-3 rounded-full hover:border-muted transition-colors duration-200 btn-press"
          >
            {t("pricingTeaser.viewAll")}
          </Link>
          <p className="text-xs text-muted/60 max-w-[60ch] text-center leading-relaxed">
            {t("tarievenPage.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
