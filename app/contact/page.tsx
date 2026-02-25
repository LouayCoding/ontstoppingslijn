"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, COMPANY_NAME } from "@/lib/constants";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={item}
            className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5"
          >
            Contact
          </motion.span>
          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6 max-w-[16ch]"
          >
            Neem contact met ons op.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-muted text-base md:text-lg max-w-[45ch] mb-14"
          >
            Bel ons direct of stuur een e-mail. Wij reageren altijd binnen 24 uur.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.a
            href={PHONE_HREF}
            variants={fadeUp}
            className="group bg-white rounded-2xl border border-divider/50 p-8 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <p className="text-xs font-semibold text-accent mb-2">Telefoon</p>
            <p className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
              {PHONE_NUMBER}
            </p>
            <p className="text-sm text-muted mt-2">24/7 bereikbaar</p>
          </motion.a>

          <motion.a
            href={`mailto:${EMAIL}`}
            variants={fadeUp}
            className="group bg-white rounded-2xl border border-divider/50 p-8 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <p className="text-xs font-semibold text-accent mb-2">E-mail</p>
            <p className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
              {EMAIL}
            </p>
            <p className="text-sm text-muted mt-2">Reactie zo snel mogelijk</p>
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl border border-divider/50 p-8"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <p className="text-xs font-semibold text-accent mb-2">Werkgebied</p>
            <p className="text-xl font-heading font-semibold">Heel Nederland</p>
            <p className="text-sm text-muted mt-2">Landelijk netwerk van vakmensen</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
