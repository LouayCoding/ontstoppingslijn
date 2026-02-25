"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerItem, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER, TOP_CITIES } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";
import { getAllSteden, getStadSlug } from "@/lib/steden";
import SectionHeader from "@/components/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function WerkgebiedPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const allSteden = getAllSteden();

  const filteredSteden = useMemo(() => {
    if (!searchQuery.trim()) return allSteden;
    const query = searchQuery.toLowerCase();
    return allSteden.filter((stad) => stad.toLowerCase().includes(query));
  }, [searchQuery, allSteden]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/heropc.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-0 mx-auto max-w-[1400px] w-full px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-white"
        >
          <motion.span
            variants={item}
            className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6"
          >
            {t("werkgebied.eyebrow")}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold max-w-[16ch] mb-6"
          >
            {t("werkgebiedPage.title")}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/70 text-lg md:text-xl max-w-[45ch] mb-10"
          >
            {t("werkgebiedPage.subtitle")}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded hover:bg-accent-hover transition-colors duration-200"
            >
              {t("werkgebiedPage.callButton", { phone: PHONE_NUMBER })}
            </a>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-base px-8 py-4 rounded hover:border-white/40 transition-colors duration-200"
            >
              {t("werkgebiedPage.appointmentButton")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Populaire steden ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            eyebrow={t("werkgebiedPage.popularLocations")}
            title={t("werkgebiedPage.mostRequested")}
            subtitle={t("werkgebiedPage.mostRequestedSub")}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
          >
            {TOP_CITIES.map((city) => (
              <motion.div key={city} variants={staggerItem}>
                <Link
                  href={`/werkgebied/${getStadSlug(city)}`}
                  className="group relative block bg-white rounded-2xl border border-divider/50 overflow-hidden hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/riool-ontstoppen.png"
                      alt={`Rioolservice ${city}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-base font-heading font-semibold group-hover:text-accent transition-colors duration-300">
                      {city}
                    </p>
                    <p className="text-xs text-muted mt-1">{t("werkgebiedPage.surrounding")}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Alle gemeenten ── */}
      <section className="py-20 md:py-28 border-t border-divider">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            eyebrow={t("werkgebiedPage.allMunicipalities")}
            title={t("werkgebiedPage.searchTitle")}
            subtitle={t("werkgebiedPage.searchSubtitle")}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="mb-12 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder={t("werkgebiedPage.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
            />
            {searchQuery && (
              <p className="text-xs text-muted mt-3 text-center">
                {filteredSteden.length} {filteredSteden.length === 1 ? t("werkgebiedPage.municipalitySingular") : t("werkgebiedPage.municipalityPlural")} {t("werkgebiedPage.found")}
              </p>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.01 } } }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {filteredSteden.map((stad) => (
              <motion.div key={stad} variants={staggerItem}>
                <Link
                  href={`/werkgebied/${getStadSlug(stad)}`}
                  className="group block bg-white rounded-xl border border-divider/50 p-4 hover:border-accent/30 transition-all duration-300"
                >
                  <p className="text-sm font-heading font-semibold group-hover:text-accent transition-colors duration-300">
                    {stad}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredSteden.length === 0 && (
            <p className="text-center text-muted py-16">
              {t("werkgebiedPage.notFound")} &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="text-sm text-muted text-center mt-12"
          >
            {t("werkgebiedPage.notFoundNote")}
          </motion.p>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
              {t("werkgebiedPage.ctaEyebrow")}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold max-w-[16ch] mb-6 text-white"
            >
              {t("werkgebiedPage.ctaTitle")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/70 text-base md:text-lg max-w-[40ch] mb-10"
            >
              {t("werkgebiedPage.ctaDescription")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-white text-accent font-semibold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                {t("werkgebiedPage.callButton", { phone: PHONE_NUMBER })}
              </a>
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/10 transition-colors duration-200"
              >
                {t("werkgebiedPage.appointmentButton")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
