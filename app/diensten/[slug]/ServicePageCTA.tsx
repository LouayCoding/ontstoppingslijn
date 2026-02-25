"use client";

import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

interface ServicePageCTAProps {
  slug: string;
  otherServices: { slug: string; price: string }[];
}

export default function ServicePageCTA({ slug, otherServices }: ServicePageCTAProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              {t("serviceDetail.directRegelen")}
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              {t("serviceDetail.needService", { service: t(`servicesList.${slug}.title`) })}
            </h2>
            <p className="text-muted text-base max-w-[40ch] mb-6">
              {t("serviceDetail.contactCta")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-accent-hover transition-colors"
              >
                {t("serviceDetail.callButton", { phone: PHONE_NUMBER })}
              </a>
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center border border-divider text-foreground font-medium text-sm px-6 py-3 rounded-full hover:border-muted transition-colors"
              >
                {t("serviceDetail.appointmentButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
          {t("serviceDetail.otherServices")}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/diensten/${s.slug}`}
              className="group block bg-white rounded-2xl border border-divider/50 p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                {t("serviceDetail.fromPrice", { price: s.price })}
              </span>
              <h3 className="text-lg font-heading font-semibold group-hover:text-accent transition-colors">
                {t(`servicesList.${s.slug}.title`)}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
