"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const STATS = [
  { value: "5.000+", label: "Verstoppingen opgelost" },
  { value: "4.9/5", label: "Klantbeoordeling" },
  { value: "24/7", label: "Spoedservice" },
  { value: "100%", label: "Professioneel" },
];

export default function TrustStrip() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 text-center border border-divider/50"
            >
              <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
