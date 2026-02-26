"use client";

import { useState } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

const TRUST_KEYS = [
  "hero.trustItems.certificate",
  "hero.trustItems.certified",
  "hero.trustItems.transparent",
  "hero.trustItems.fast",
];

interface HeroProps {
  stad?: string;
}

export default function Hero({ stad }: HeroProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    postcode: "",
    huisnummer: "",
    opmerking: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
        setFormData({ naam: "", email: "", telefoon: "", postcode: "", huisnummer: "", opmerking: "" });
      } else {
        const data = await response.json().catch(() => null);
        console.error("Form submission failed:", response.status, data);
        setErrorMessage(data?.error || `Server error (${response.status})`);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage(err instanceof Error ? err.message : t("networkError"));
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden hero-bg-zoom"
        style={{ backgroundImage: "url(/heromobile.png)" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block hero-bg-zoom"
        style={{ backgroundImage: "url(/heropc.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      <div className="relative z-0 mx-auto max-w-[1200px] w-full px-6 pt-28 pb-16 md:pt-36 md:pb-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="hero-stagger">
            {stad && (
              <div className="flex items-center gap-2 text-sm text-white/60 mb-6 hero-item">
                <a href="/werkgebied" className="hover:text-accent transition-colors">{t("stad.breadcrumbWerkgebied")}</a>
                <span className="text-white/30">/</span>
                <span className="text-white">{stad}</span>
              </div>
            )}

            <span
              className="inline-flex bg-white/15 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 hero-item"
            >
              {stad ? t("stad.heroEyebrow", { stad }) : t("hero.subtitle")}
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold max-w-[14ch] mb-6 leading-[1.08] hero-item"
            >
              {stad ? t("stad.heroTitle", { stad }) : t("hero.title")}
            </h1>

            <p
              className="text-white/70 text-lg md:text-xl max-w-[40ch] mb-10 hero-item"
            >
              {stad ? t("stad.heroDescription", { stad }) : t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 hero-item">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-accent text-white font-medium text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-colors duration-200 btn-press"
              >
                {t("hero.callButton", { phone: PHONE_NUMBER })}
              </a>
              <a
                href="#afspraak-form"
                className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white/40 transition-colors duration-200 btn-press"
              >
                {t("hero.appointmentButton")}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 hero-item">
              {TRUST_KEYS.map((key) => (
                <span key={key} className="inline-flex items-center gap-2 text-sm text-white/60 bg-white/10 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            id="afspraak-form"
            className="hero-form"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8 flex flex-col gap-4 md:gap-5 text-foreground"
            >
              <div>
                <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {t("appointment.eyebrow")}
                </span>
                <h2 className="text-lg md:text-xl font-heading font-semibold mb-1">
                  {t("appointment.title")}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {t("appointment.subtitle")}
                </p>
              </div>

              <div>
                <label htmlFor="hero-naam" className="block text-sm text-muted mb-1.5">
                  {t("appointment.form.name")}
                </label>
                <input
                  type="text"
                  id="hero-naam"
                  name="naam"
                  required
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm"
                  placeholder={t("appointment.form.placeholders.name")}
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-sm text-muted mb-1.5">
                  {t("appointment.form.email")}
                </label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm"
                  placeholder={t("appointment.form.placeholders.email")}
                />
              </div>

              <div>
                <label htmlFor="hero-telefoon" className="block text-sm text-muted mb-1.5">
                  {t("appointment.form.phone")}
                </label>
                <input
                  type="tel"
                  id="hero-telefoon"
                  name="telefoon"
                  required
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm"
                  placeholder={t("appointment.form.placeholders.phone")}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="hero-postcode" className="block text-sm text-muted mb-1.5">
                    {t("appointment.form.postalCode")}
                  </label>
                  <input
                    type="text"
                    id="hero-postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm"
                    placeholder={t("appointment.form.placeholders.postalCode")}
                  />
                </div>
                <div>
                  <label htmlFor="hero-huisnummer" className="block text-sm text-muted mb-1.5">
                    {t("appointment.form.houseNumber")}
                  </label>
                  <input
                    type="text"
                    id="hero-huisnummer"
                    name="huisnummer"
                    required
                    value={formData.huisnummer}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm"
                    placeholder={t("appointment.form.placeholders.houseNumber")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hero-opmerking" className="block text-sm text-muted mb-1.5">
                  {t("appointment.form.remark")}
                </label>
                <textarea
                  id="hero-opmerking"
                  name="opmerking"
                  rows={2}
                  value={formData.opmerking}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 md:py-3 bg-surface border border-divider rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 text-base md:text-sm resize-none"
                  placeholder={t("appointment.form.placeholders.remark")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-medium text-base md:text-sm px-6 py-4 md:py-3.5 rounded-full hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("appointment.form.submitting") : t("appointment.form.submit")}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-accent text-center">
                  {t("appointment.form.success")}
                </p>
              )}
              {submitStatus === "error" && (
                <div className="text-center">
                  <p className="text-sm text-red-500">
                    {t("appointment.form.error")}
                  </p>
                  {errorMessage && (
                    <p className="text-xs text-red-400 mt-1">{errorMessage}</p>
                  )}
                </div>
              )}
              {submitStatus === "idle" && (
                <p className="text-xs text-muted text-center">
                  {t("appointment.form.info")}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
