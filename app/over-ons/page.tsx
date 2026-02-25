"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function OverOnsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.span
              variants={item}
              className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5"
            >
              Over ons
            </motion.span>
            <motion.h1
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8"
            >
              Rioolbeheer door heel Nederland.
            </motion.h1>
            <motion.div variants={item} className="flex flex-col gap-6 text-muted text-base leading-relaxed">
              <p>
                Loodgieter is een landelijk netwerk van ervaren rioolspecialisten. 
                Geen groot bedrijf met dure kantoren, maar vakmensen die hun werk serieus nemen.
              </p>
              <p>
                Elke situatie is anders. Daarom werken wij niet met standaard oplossingen, 
                maar bekijken we per geval wat er nodig is. Eerlijk advies, heldere prijzen 
                en werk waar we achter staan.
              </p>
              <p>
                Van Amsterdam tot Maastricht — wij zorgen ervoor dat er altijd een monteur 
                bij u in de buurt beschikbaar is. Snel, betrouwbaar en 24/7 bereikbaar.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            style={{ position: 'relative' }}
          >
            <Image
              src="/dak-inspectie.png"
              alt="Monteur van Loodgieter aan het werk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-20"
          style={{ position: 'relative' }}
        >
          <Image
            src="/schoorsteenkap-plaatsen.png"
            alt="Loodgieter rioolservice door heel Nederland"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            { value: "10+", label: "Jaar ervaring" },
            { value: "5.000+", label: "Tevreden klanten" },
            { value: "Heel NL", label: "Werkgebied" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="bg-white rounded-2xl border border-divider/50 p-6 text-center">
              <p className="text-4xl font-heading font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-colors"
          >
            Bel {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
