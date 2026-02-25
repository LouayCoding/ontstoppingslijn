"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_NAME, NAV_LINKS } from "@/lib/constants";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n-context";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  const hasDarkHero = pathname === "/" || pathname === "/werkgebied" || pathname.startsWith("/werkgebied/");
  const showLight = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 bg-white border-b transition-all duration-500 ease-out ${
          scrolled || !hasDarkHero
            ? "opacity-100 translate-y-0 border-divider/40"
            : "opacity-0 -translate-y-2 border-transparent"
        }`}
      />
      <div
        className={`relative mx-auto px-6 md:px-8 transition-all duration-500 ease-out ${
          scrolled ? "max-w-full" : "max-w-[1200px]"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${showLight ? 'text-white' : 'text-foreground'}`}>
            Loodgieter
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${showLight ? 'text-white/70 hover:text-white' : 'text-muted hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={PHONE_HREF}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${showLight ? 'text-white' : 'text-foreground'}`}
            >
              {PHONE_NUMBER}
            </a>
            <Link
              href="/afspraak"
              className="text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              {t("hero.appointmentButton")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <LanguageSwitcher iconOnly />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-11 h-11 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${showLight ? 'bg-white' : 'bg-foreground'} ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${showLight ? 'bg-white' : 'bg-foreground'} ${
                  menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <nav className="flex flex-col px-6 pt-8 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-heading font-semibold py-3 text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-divider flex flex-col gap-4">
                <LanguageSwitcher />
                <a href={PHONE_HREF} className="text-lg font-medium text-accent">
                  {PHONE_NUMBER}
                </a>
                <Link
                  href="/afspraak"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-hover transition-colors"
                >
                  {t("hero.appointmentButton")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
