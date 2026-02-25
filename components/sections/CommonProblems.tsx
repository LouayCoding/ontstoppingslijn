"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerItem, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import { useTranslation } from "@/lib/i18n-context";

const PROBLEM_KEYS = ["smell", "flies", "gurgling", "slow", "overflow"];

const ICONS: Record<string, React.ReactNode> = {
  smell: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  ),
  flies: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75ZM12 12.75c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-3.83-7.94M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 3.831-7.94M12 12.75a23.848 23.848 0 0 1 4.377-7.5M12 12.75a23.848 23.848 0 0 0-4.377-7.5M8.25 6.008c-.587.076-1.17.162-1.75.256M15.75 6.008c.587.076 1.17.162 1.75.256" />
    </svg>
  ),
  gurgling: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>
  ),
  slow: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  overflow: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  ),
};

export default function CommonProblems() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={t("problems.eyebrow")}
          title={t("problems.title")}
          subtitle={t("problems.subtitle")}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {PROBLEM_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={staggerItem}
              className="bg-white rounded-2xl p-6 border border-divider/50 hover:border-accent/30 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                {ICONS[key]}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {t(`problems.items.${key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {t(`problems.items.${key}.description`)}
              </p>
              <p className="text-xs text-accent font-medium">
                {t(`problems.items.${key}.solution`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-7 py-3 rounded-full hover:bg-accent-hover transition-colors btn-press"
          >
            {t("problems.callButton", { phone: PHONE_NUMBER })}
          </a>
          <Link
            href="/afspraak"
            className="inline-flex items-center justify-center border border-divider text-foreground font-medium text-sm px-6 py-3 rounded-full hover:border-muted transition-colors duration-200"
          >
            {t("problems.appointmentButton")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
