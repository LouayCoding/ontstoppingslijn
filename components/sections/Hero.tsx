"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const TRUST_ITEMS = [
  "Landelijk netwerk",
  "Dezelfde dag mogelijk",
  "Geen voorrijkosten",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[1200px] w-full px-6 pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <motion.span
          variants={item}
          className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6"
        >
          Schoorsteenservice
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold max-w-[14ch] mb-6"
        >
          Vakkundig en snel geregeld.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted text-lg md:text-xl max-w-[40ch] mb-10"
        >
          Schoorsteen vegen, inspectie of reparatie. Vandaag nog geholpen, door heel Nederland.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-foreground font-medium text-base px-8 py-4 rounded hover:bg-accent-hover transition-colors duration-200"
          >
            Bel {PHONE_NUMBER}
          </a>
          <Link
            href="/afspraak"
            className="inline-flex items-center justify-center border border-foreground/20 text-foreground font-medium text-base px-8 py-4 rounded hover:border-foreground/40 transition-colors duration-200"
          >
            Afspraak maken
          </Link>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-x-8 gap-y-3">
          {TRUST_ITEMS.map((text) => (
            <span key={text} className="flex items-center gap-2.5 text-sm text-muted">
              <span className="w-1 h-1 rounded-full bg-accent" />
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
