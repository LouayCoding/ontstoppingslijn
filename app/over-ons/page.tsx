"use client";

import Image from "next/image";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

export default function OverOnsPage() {
  const { t } = useTranslation();
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="reveal">
            <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              {t("about.eyebrow")}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8">
              {t("about.title")}
            </h1>
            <div className="flex flex-col gap-6 text-muted text-base leading-relaxed">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
              <p>{t("about.intro3")}</p>
            </div>
          </div>

          <div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl reveal-scale"
            style={{ position: 'relative' }}
          >
            <Image
              src="/riool-ontstoppen.png"
              alt="Monteur van Ontstoppingslijn aan het werk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div
          className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-20 reveal-scale"
          style={{ position: 'relative' }}
        >
          <Image
            src="/rioolreiniging.png"
            alt="Ontstoppingslijn rioolservice door heel Nederland"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 reveal-stagger">
          {[
            { value: "10+", label: t("about.stats.experience") },
            { value: "5.000+", label: t("about.stats.customers") },
            { value: "Heel NL", label: t("about.stats.coverage") },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-divider/50 p-6 text-center">
              <p className="text-4xl font-heading font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-colors btn-press"
          >
            {t("about.callButton", { phone: PHONE_NUMBER })}
          </a>
        </div>
      </div>
    </section>
  );
}
