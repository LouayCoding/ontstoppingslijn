"use client";

import Image from "next/image";
import Link from "next/link";
import { TOP_CITIES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

export default function Werkgebied() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow={t("werkgebied.eyebrow")}
              title={t("werkgebied.title")}
              subtitle={t("werkgebied.subtitle")}
              align="left"
            />

            <div className="flex flex-wrap gap-2.5 mb-8 reveal-stagger">
              {TOP_CITIES.map((city) => (
                <div key={city}>
                  <Link
                    href={`/werkgebied/${city.toLowerCase()}`}
                    className="inline-flex bg-surface text-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                  >
                    {city}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 reveal">
              <p className="text-sm text-muted/60">
                {t("werkgebied.surrounding")}
              </p>
              <Link
                href="/werkgebied"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
              >
                {t("werkgebied.viewAll")} →
              </Link>
            </div>
          </div>

          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl reveal-scale"
            style={{ position: 'relative' }}
          >
            <Image
              src="/riool-ontstoppen.png"
              alt="Rioolservice door heel Nederland"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
