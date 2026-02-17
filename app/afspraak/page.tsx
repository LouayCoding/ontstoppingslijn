"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PHONE_NUMBER, PHONE_HREF, SERVICES } from "@/lib/constants";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function AfspraakPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
            Verstuurd
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Bedankt voor uw aanvraag.
          </h1>
          <p className="text-muted text-base mb-8">
            Wij nemen zo snel mogelijk contact met u op. Gemiddeld binnen 2 uur.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-foreground font-medium text-sm px-6 py-3 rounded hover:bg-accent-hover transition-colors"
          >
            Of bel direct: {PHONE_NUMBER}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.span
              variants={item}
              className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4"
            >
              Afspraak maken
            </motion.span>
            <motion.h1
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6"
            >
              Plan uw afspraak.
            </motion.h1>
            <motion.p variants={item} className="text-muted text-base mb-8 max-w-[40ch]">
              Vul het formulier in en wij nemen binnen 24 uur contact met u op.
              Liever direct? Bel ons.
            </motion.p>
            <motion.a
              variants={item}
              href={PHONE_HREF}
              className="text-lg font-heading font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              {PHONE_NUMBER}
            </motion.a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.div variants={item}>
              <label className="block text-sm text-muted mb-2">Naam</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border border-divider rounded px-4 py-3 text-foreground text-base focus:border-accent focus:outline-none transition-colors"
                placeholder="Uw volledige naam"
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm text-muted mb-2">Telefoon</label>
              <input
                type="tel"
                required
                className="w-full bg-transparent border border-divider rounded px-4 py-3 text-foreground text-base focus:border-accent focus:outline-none transition-colors"
                placeholder="06 1234 5678"
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm text-muted mb-2">E-mail</label>
              <input
                type="email"
                required
                className="w-full bg-transparent border border-divider rounded px-4 py-3 text-foreground text-base focus:border-accent focus:outline-none transition-colors"
                placeholder="uw@email.nl"
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm text-muted mb-2">Dienst</label>
              <select
                required
                className="w-full bg-transparent border border-divider rounded px-4 py-3 text-foreground text-base focus:border-accent focus:outline-none transition-colors"
              >
                <option value="" className="bg-background">Selecteer een dienst</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug} className="bg-background">
                    {s.title} — vanaf €{s.price}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm text-muted mb-2">Opmerking (optioneel)</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border border-divider rounded px-4 py-3 text-foreground text-base focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Bijv. gewenste datum, bijzonderheden..."
              />
            </motion.div>
            <motion.button
              variants={item}
              type="submit"
              className="w-full bg-accent text-foreground font-medium text-base py-4 rounded hover:bg-accent-hover transition-colors mt-2"
            >
              Verstuur aanvraag
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
