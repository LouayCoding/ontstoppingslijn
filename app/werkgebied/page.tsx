"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerItem, viewportConfig } from "@/lib/animations";
import { TOP_CITIES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function WerkgebiedPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Werkgebied"
          title="Actief door heel Nederland."
          subtitle="Ons landelijk netwerk van vakmensen staat voor u klaar. Van Groningen tot Maastricht."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-divider mb-12"
        >
          {TOP_CITIES.map((city) => (
            <motion.div key={city} variants={staggerItem}>
              <Link
                href={`/werkgebied/${city.toLowerCase()}`}
                className="group block bg-background p-6 text-center transition-colors hover:bg-surface"
              >
                <p className="text-base font-heading font-semibold group-hover:text-accent transition-colors">
                  {city}
                </p>
                <p className="text-xs text-muted mt-1">+ omgeving</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-sm text-muted text-center mb-16"
        >
          Staat uw plaats er niet bij? Neem contact op — wij zijn vrijwel overal actief.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center"
        >
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-foreground font-medium text-base px-8 py-4 rounded hover:bg-accent-hover transition-colors"
          >
            Bel {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
