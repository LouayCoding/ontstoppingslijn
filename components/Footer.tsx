import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, COMPANY_NAME, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <p className="font-heading text-lg font-semibold tracking-tight mb-4">
              {COMPANY_NAME}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-[280px]">
              Professionele schoorsteen-, luchtkanaal- en ventilatieservice door heel Nederland. Vakkundig, snel en eerlijk geprijsd.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 text-foreground">Diensten</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 text-foreground">Navigatie</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4 text-foreground">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/voorwaarden"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
