"use client";

import { COMPANY_NAME, EMAIL } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

export default function VoorwaardenPage() {
  const { t } = useTranslation();
  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
          {t("termsPage.eyebrow")}
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
          {t("termsPage.title")}
        </h1>

        <div className="flex flex-col gap-8 text-muted text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article1")}
            </h2>
            <p>{t("termsPage.article1Text", { company: COMPANY_NAME })}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article2")}
            </h2>
            <p>{t("termsPage.article2Text", { company: COMPANY_NAME })}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article3")}
            </h2>
            <p>{t("termsPage.article3Text")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article4")}
            </h2>
            <p>{t("termsPage.article4Text")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article5")}
            </h2>
            <p>{t("termsPage.article5Text")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.article6")}
            </h2>
            <p>{t("termsPage.article6Text", { company: COMPANY_NAME })}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("termsPage.contact")}
            </h2>
            <p>
              {t("termsPage.contactText")}{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-hover transition-colors">
                {EMAIL}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
