"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n-context";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface ServiceDetailClientProps {
  service: {
    slug: string;
    title: string;
    price: string;
    description: string;
    image: string;
    details: { label: string; price: string }[];
    benefits?: string[];
    process?: { step: string; description: string }[];
    faq?: { q: string; a: string }[];
  };
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const slug = service.slug;

  return (
    <>
      {/* Hero Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
      >
        <div>
          <motion.span
            variants={item}
            className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-5"
          >
            {t("serviceDetail.fromPrice", { price: service.price })}
          </motion.span>
          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6"
          >
            {t(`servicesList.${slug}.title`)}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-[45ch]"
          >
            {t(`servicesList.${slug}.description`)}
          </motion.p>
          <motion.div variants={item}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted mb-4">
              {t("serviceDetail.pricing")}
            </h3>
            <ul className="flex flex-col gap-3">
              {service.details.map((_, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between text-base border-b border-divider pb-3"
                >
                  <span className="text-muted">{t(`servicesList.${slug}.details.${i}.label`)}</span>
                  <span className="text-foreground font-medium">{t(`servicesList.${slug}.details.${i}.price`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ position: 'relative' }}>
          <Image
            src={service.image}
            alt={t(`servicesList.${service.slug}.title`)}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="mt-20">
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t("serviceDetail.benefits.eyebrow")}
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            {t("serviceDetail.benefits.title", { service: t(`servicesList.${slug}.title`).toLowerCase() })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-base text-foreground">{t(`servicesList.${slug}.benefits.${index}`)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <div className="mt-20">
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t("serviceDetail.process.eyebrow")}
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            {t("serviceDetail.process.title")}
          </h2>
          <div className="flex flex-col gap-0 relative">
            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-divider" />
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-6 relative pb-8 last:pb-0">
                <div className="relative z-10 shrink-0 w-[47px] h-[47px] rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-accent">
                    0{index + 1}
                  </span>
                </div>
                <div className="pt-2.5">
                  <h3 className="text-base font-heading font-semibold mb-1.5">
                    {t(`servicesList.${slug}.process.${index}.step`)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {t(`servicesList.${slug}.process.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <div className="mt-20">
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t("serviceDetail.faq.eyebrow")}
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            {t("serviceDetail.faq.title", { service: t(`servicesList.${slug}.title`).toLowerCase() })}
          </h2>
          <div className="bg-white rounded-2xl border border-divider/50 overflow-hidden">
            {service.faq.map((faqItem, index) => (
              <div key={index} className={index < service.faq!.length - 1 ? "border-b border-divider/50" : ""}>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="text-base font-medium pr-8 group-hover:text-accent transition-colors duration-200">
                    {t(`servicesList.${slug}.faq.${index}.q`)}
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted leading-relaxed max-w-[55ch]">
                      {t(`servicesList.${slug}.faq.${index}.a`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
