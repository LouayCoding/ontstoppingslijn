"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

export default function DienstenPage() {
  const { t } = useTranslation();
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("dienstenPage.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {SERVICES.map((service) => (
            <div key={service.slug}>
              <Link
                href={`/diensten/${service.slug}`}
                className="group block bg-white rounded-2xl border border-divider/50 overflow-hidden h-full hover:border-accent/30 hover-lift"
              >
                <div className="relative aspect-[16/10] img-zoom">
                  <Image
                    src={service.image}
                    alt={t(`servicesList.${service.slug}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex bg-white/90 backdrop-blur-sm text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {t("services.from")} €{service.price}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {t(`servicesList.${service.slug}.title`)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {t(`servicesList.${service.slug}.description`)}
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {service.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-baseline justify-between text-sm"
                      >
                        <span className="text-muted">{t(`servicesList.${service.slug}.details.${i}.label`)}</span>
                        <span className="text-foreground font-medium">{t(`servicesList.${service.slug}.details.${i}.price`)}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm font-medium text-accent group-hover:text-accent-hover transition-colors duration-300">
                    {t("dienstenPage.moreInfo")} →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
