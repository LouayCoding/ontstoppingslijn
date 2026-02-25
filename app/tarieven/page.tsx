"use client";

import Link from "next/link";
import { SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

export default function TarievenPage() {
  const { t } = useTranslation();
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={t("tarievenPage.eyebrow")}
          title={t("tarievenPage.title")}
          subtitle={t("tarievenPage.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 reveal-stagger">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl p-8 border border-divider/50 hover-lift"
            >
              <Link href={`/diensten/${service.slug}`} className="group block">
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                  {t(`servicesList.${service.slug}.title`)}
                </h3>
                <p className="text-3xl font-heading font-bold text-accent mb-6">
                  €{service.price}
                  <span className="text-sm font-body text-muted font-normal ml-1">{t("tarievenPage.from")}</span>
                </p>
                <ul className="flex flex-col gap-3 mb-4">
                  {service.details.map((_, i) => (
                    <li key={i} className="flex items-baseline justify-between text-sm">
                      <span className="text-muted">{t(`servicesList.${service.slug}.details.${i}.label`)}</span>
                      <span className="text-foreground font-medium">{t(`servicesList.${service.slug}.details.${i}.price`)}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-medium text-accent group-hover:text-accent-hover transition-colors">
                  {t("tarievenPage.moreInfo")} →
                </span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted/60 max-w-[65ch] mx-auto text-center leading-relaxed mb-16 reveal">
          {t("tarievenPage.disclaimer")}
        </p>

        <div className="text-center reveal">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-colors btn-press"
          >
            {t("tarievenPage.callButton", { phone: PHONE_NUMBER })}
          </a>
        </div>
      </div>
    </section>
  );
}
