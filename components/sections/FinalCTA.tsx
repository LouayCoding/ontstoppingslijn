"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

export default function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="bg-gradient-to-br from-accent to-accent-hover rounded-3xl px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex bg-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
          >
            {t("finalCta.eyebrow")}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold max-w-[16ch] mb-6 text-white"
          >
            {t("finalCta.title")}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-base md:text-lg max-w-[40ch] mb-10"
          >
            {t("finalCta.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-white text-accent font-semibold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              {t("finalCta.callButton", { phone: PHONE_NUMBER })}
            </a>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center border border-white/30 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/10 transition-colors duration-200"
            >
              {t("finalCta.appointmentButton")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
