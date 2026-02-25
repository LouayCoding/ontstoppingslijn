"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerItem, viewportConfig } from "@/lib/animations";
import { PHONE_HREF, PHONE_NUMBER, SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

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
  "24/7 Spoedservice",
  "Ervaren monteurs",
  "Transparante tarieven",
  "Snelle responstijd",
];

const STEPS = [
  {
    number: "01",
    title: "Bel of plan online",
    description:
      "Bel ons direct of vul het formulier in. Bij spoed zijn wij er vaak binnen 1-2 uur.",
  },
  {
    number: "02",
    title: "Monteur komt langs",
    description:
      "Een ervaren monteur komt met professionele apparatuur bij u langs. Geen verborgen kosten.",
  },
  {
    number: "03",
    title: "Probleem opgelost",
    description:
      "Uw riool, afvoer of leiding stroomt weer als vanouds. Snel, schoon en netjes.",
  },
];

export default function StadContent({ stad }: { stad: string }) {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    postcode: "",
    huisnummer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, stad }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ naam: "", email: "", telefoon: "", postcode: "", huisnummer: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const topServices = SERVICES.slice(0, 6);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden">
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
          className="relative z-0 mx-auto max-w-[1200px] w-full px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-white"
        >
          <motion.div variants={item} className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/werkgebied" className="hover:text-accent transition-colors">
              Werkgebied
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white">{stad}</span>
          </motion.div>

          <motion.span
            variants={item}
            className="inline-flex bg-white/15 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
          >
            Rioolservice in {stad}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold max-w-[18ch] mb-6"
          >
            Snel en vakkundig ontstopt in {stad}.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/70 text-lg md:text-xl max-w-[50ch] mb-10"
          >
            Riool verstopt in {stad}? Wij lossen het op. Ontstopping, inspectie en reparatie. 24/7 spoedservice.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Bel {PHONE_NUMBER}
            </a>
            <a
              href="#afspraak"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white/40 transition-colors duration-200"
            >
              Afspraak maken
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            {TRUST_ITEMS.map((text) => (
              <span key={text} className="inline-flex items-center gap-2 text-sm text-white/60 bg-white/10 px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Diensten Grid ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            eyebrow={`Onze diensten in ${stad}`}
            title="Alle rioolservices."
            subtitle={`Van ontstoppingen tot rioolreparatie in ${stad}. Vakkundig en eerlijk geprijsd.`}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {topServices.map((service) => (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group block bg-white rounded-2xl border border-divider/50 overflow-hidden h-full hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3">
                      Vanaf €{service.price}
                    </span>
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hoe werkt het ── */}
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
              Zo werkt het in {stad}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">
              In drie stappen geregeld.
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
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={fadeUp} className="flex gap-6 relative pb-10 last:pb-0">
                <div className="relative z-10 shrink-0 w-[47px] h-[47px] rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2.5">
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
            className="text-center mt-12"
          >
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-7 py-3 rounded-full hover:bg-accent-hover transition-colors"
            >
              Bel {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Afspraak Formulier ── */}
      <section id="afspraak" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            eyebrow={`Afspraak in ${stad}`}
            title="Direct plannen."
            subtitle={`Vul het formulier in en wij nemen binnen 24 uur contact met u op voor uw afspraak in ${stad}.`}
          />

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            onSubmit={handleSubmit}
            className="max-w-[600px] mx-auto bg-white rounded-2xl border border-divider/50 p-6 md:p-8"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div>
                <label htmlFor="naam" className="block text-sm text-muted mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  required
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="telefoon" className="block text-sm text-muted mb-2">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  required
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                  placeholder="06 12345678"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postcode" className="block text-sm text-muted mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    placeholder="1234 AB"
                  />
                </div>

                <div>
                  <label htmlFor="huisnummer" className="block text-sm text-muted mb-2">
                    Huisnummer *
                  </label>
                  <input
                    type="text"
                    id="huisnummer"
                    name="huisnummer"
                    required
                    value={formData.huisnummer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Verzenden..." : "Afspraak aanvragen"}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-accent text-center">
                  ✓ Bedankt! We nemen binnen 24 uur contact met u op.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Er is iets misgegaan. Probeer het opnieuw of bel ons direct.
                </p>
              )}

              {submitStatus === "idle" && (
                <p className="text-xs text-muted text-center">
                  We nemen binnen 24 uur contact met u op
                </p>
              )}
            </motion.div>
          </motion.form>
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
              Rioolservice {stad}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold max-w-[20ch] mb-6 text-white"
            >
              Riool verstopt in {stad}? Wij helpen direct.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/70 text-base md:text-lg max-w-[40ch] mb-10"
            >
              Bel ons direct of plan online een afspraak. 24/7 bereikbaar in {stad} en omgeving.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-white text-accent font-semibold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                Bel {PHONE_NUMBER}
              </a>
              <a
                href="#afspraak"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/10 transition-colors duration-200"
              >
                Afspraak maken
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
