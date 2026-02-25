"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

const STEP_KEYS = ["step1", "step2", "step3"];
const STEP_NUMBERS = ["01", "02", "03"];

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-[700px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t("howItWorks.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold">
            {t("howItWorks.title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col gap-0 relative"
        >
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-divider" />
          {STEP_KEYS.map((key, i) => (
            <motion.div key={key} variants={fadeUp} className="flex gap-6 relative pb-10 last:pb-0">
              <div className="relative z-10 shrink-0 w-[47px] h-[47px] rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-heading font-bold text-accent">
                  {STEP_NUMBERS[i]}
                </span>
              </div>
              <div className="pt-2.5">
                <h3 className="text-base font-heading font-semibold mb-1.5">
                  {t(`howItWorks.steps.${key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`howItWorks.steps.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-7 py-3 rounded-full hover:bg-accent-hover transition-colors"
          >
            {t("howItWorks.callButton", { phone: PHONE_NUMBER })}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
