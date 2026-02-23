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
  "Gecertificeerde vakmensen",
  "Inclusief veegbewijs",
  "Transparante tarieven",
  "Binnen 48 uur geholpen",
];

const STEPS = [
  {
    number: "01",
    title: "Plan uw afspraak",
    description:
      "Vul het formulier in of bel ons direct. Wij bevestigen uw afspraak binnen 24 uur.",
  },
  {
    number: "02",
    title: "Vakman komt langs",
    description:
      "Een ervaren schoorsteenveger komt op de afgesproken dag bij u langs. Geen verborgen kosten.",
  },
  {
    number: "03",
    title: "Schoon en veilig",
    description:
      "Uw schoorsteen is weer schoon en veilig. U ontvangt een veegbewijs voor uw verzekering.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-0 mx-auto max-w-[1400px] w-full px-6 pt-32 pb-20 md:pt-40 md:pb-28"
        >
          <motion.div variants={item} className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link href="/werkgebied" className="hover:text-accent transition-colors">
              Werkgebied
            </Link>
            <span className="text-muted/40">/</span>
            <span className="text-foreground">{stad}</span>
          </motion.div>

          <motion.span
            variants={item}
            className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6"
          >
            Schoorsteenveger in {stad}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold max-w-[18ch] mb-6"
          >
            Vakkundig en snel geregeld in {stad}.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted text-lg md:text-xl max-w-[50ch] mb-10"
          >
            Professioneel schoorsteen vegen, inspectie of reparatie in {stad} en omgeving. Vandaag nog geholpen.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-accent text-foreground font-medium text-base px-8 py-4 rounded hover:bg-accent-hover transition-colors duration-200"
            >
              Bel {PHONE_NUMBER}
            </a>
            <a
              href="#afspraak"
              className="inline-flex items-center justify-center border border-foreground/20 text-foreground font-medium text-base px-8 py-4 rounded hover:border-foreground/40 transition-colors duration-200"
            >
              Afspraak maken
            </a>
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

      {/* ── Diensten Grid ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeader
            eyebrow={`Onze diensten in ${stad}`}
            title="Alles voor uw schoorsteen."
            subtitle={`Van regulier onderhoud tot specialistisch werk in ${stad}. Vakkundig en eerlijk geprijsd.`}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider"
          >
            {topServices.map((service) => (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group block bg-background h-full transition-colors duration-300 hover:bg-surface"
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
                  <div className="flex flex-col p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.15em] text-accent font-medium mb-3">
                      Vanaf €{service.price}
                    </p>
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
      <section className="py-20 md:py-28 border-t border-divider">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded order-2 lg:order-1"
            >
              <Image
                src="/camera-inspectie.png"
                alt={`Schoorsteenveger aan het werk in ${stad}`}
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
                Zo werkt het in {stad}
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

      {/* ── Afspraak Formulier ── */}
      <section id="afspraak" className="py-20 md:py-28 border-t border-divider">
        <div className="mx-auto max-w-[1400px] px-6">
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
            className="max-w-[600px] mx-auto"
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
                  className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
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
                  className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
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
                  className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
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
                    className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
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
                    className="w-full px-4 py-3 bg-surface border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-foreground font-medium text-sm px-6 py-3 rounded hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/daklekkage-repareren.png)" }}
        />
        <div className="absolute inset-0 bg-[#141414]/85" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col items-center text-center"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6"
            >
              Schoorsteenveger {stad}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold max-w-[20ch] mb-6 text-[#f5f5f0]"
            >
              Klaar om het te regelen in {stad}?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#a0a0a0] text-base md:text-lg max-w-[40ch] mb-10"
            >
              Bel ons direct of plan online een afspraak. Wij staan voor u klaar in {stad} en omgeving.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-accent text-[#f5f5f0] font-medium text-base px-8 py-4 rounded hover:bg-accent-hover transition-colors duration-200"
              >
                Bel {PHONE_NUMBER}
              </a>
              <a
                href="#afspraak"
                className="inline-flex items-center justify-center border border-white/20 text-[#f5f5f0] font-medium text-base px-8 py-4 rounded hover:border-white/40 transition-colors duration-200"
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
