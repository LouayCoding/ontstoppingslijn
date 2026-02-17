"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Bel of plan online",
    description:
      "Neem telefonisch contact op of maak direct een afspraak via onze website. Wij reageren binnen 24 uur.",
  },
  {
    number: "02",
    title: "Wij komen langs",
    description:
      "Een ervaren vakman komt op de afgesproken dag bij u langs. Geen verrassingen, geen verborgen kosten.",
  },
  {
    number: "03",
    title: "Klaar en veilig",
    description:
      "Uw schoorsteen is weer schoon en veilig. U ontvangt een bewijs van onderhoud voor uw verzekering.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 border-t border-divider">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="relative aspect-[4/5] overflow-hidden rounded order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80"
              alt="Schoorsteenveger aan het werk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4"
            >
              Zo werkt het
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-heading font-semibold mb-12"
            >
              In drie stappen geregeld.
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="flex flex-col gap-10 mb-10"
            >
              {STEPS.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="flex gap-6">
                  <span className="text-3xl font-heading font-semibold text-accent/30 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-heading font-semibold mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
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
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-accent text-foreground font-medium text-sm px-6 py-3 rounded hover:bg-accent-hover transition-colors"
              >
                Bel {PHONE_NUMBER}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
