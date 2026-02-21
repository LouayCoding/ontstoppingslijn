"use client";

import { useState } from "react";
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
  "Inclusief veegbewijs",
  "Gecertificeerde vakmensen",
  "Transparante tarieven",
  "Snelle service",
];

export default function Hero() {
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
        body: JSON.stringify(formData),
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

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Mobile Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url(/heromobile.png)" }}
      />
      {/* Desktop Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url(/heropc.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative z-0 mx-auto max-w-[1200px] w-full px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.span
              variants={item}
              className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6"
            >
              Schoorsteenvegen nu v.a. €39,50,-
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-heading font-semibold max-w-[14ch] mb-6"
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

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface/80 backdrop-blur-md rounded-lg p-6 md:p-8 flex flex-col gap-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-1">
                  Direct plannen
                </p>
                <h2 className="text-xl font-heading font-semibold mb-2">
                  Maak een afspraak
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  Vul uw gegevens in en wij nemen binnen 24 uur contact met u op voor een afspraak.
                </p>
              </div>

              <div>
                <label htmlFor="hero-naam" className="block text-sm text-muted mb-1.5">
                  Naam
                </label>
                <input
                  type="text"
                  id="hero-naam"
                  name="naam"
                  required
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/60 border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-sm text-muted mb-1.5">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/60 border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="hero-telefoon" className="block text-sm text-muted mb-1.5">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="hero-telefoon"
                  name="telefoon"
                  required
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/60 border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
                  placeholder="06 12345678"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="hero-postcode" className="block text-sm text-muted mb-1.5">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="hero-postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/60 border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
                    placeholder="1234 AB"
                  />
                </div>
                <div>
                  <label htmlFor="hero-huisnummer" className="block text-sm text-muted mb-1.5">
                    Huisnummer
                  </label>
                  <input
                    type="text"
                    id="hero-huisnummer"
                    name="huisnummer"
                    required
                    value={formData.huisnummer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/60 border border-divider rounded text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-foreground font-medium text-sm px-6 py-3.5 rounded hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
