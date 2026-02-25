"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

interface ServicesGridProps {
  stad?: string;
}

export default function ServicesGrid({ stad }: ServicesGridProps) {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={stad ? `Onze diensten in ${stad}` : t("services.eyebrow")}
          title={stad ? "Alle rioolservices." : t("services.title")}
          subtitle={stad ? `Van ontstoppingen tot rioolreparatie in ${stad}. Vakkundig en eerlijk geprijsd.` : t("services.subtitle")}
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
                </div>
                <div className="flex flex-col p-6">
                  <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3">
                    {t("services.from")} €{service.price}
                  </span>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {t(`servicesList.${service.slug}.title`)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {t(`servicesList.${service.slug}.description`)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
