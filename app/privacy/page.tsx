"use client";

import { COMPANY_NAME, EMAIL } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

export default function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
          {t("privacyPage.eyebrow")}
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
          {t("privacyPage.title")}
        </h1>

        <div className="flex flex-col gap-8 text-muted text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.whoWeAre")}
            </h2>
            <p>{t("privacyPage.whoWeAreText", { company: COMPANY_NAME })}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.whatData")}
            </h2>
            <p>{t("privacyPage.whatDataText")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.whyData")}
            </h2>
            <p>{t("privacyPage.whyDataText")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.retention")}
            </h2>
            <p>{t("privacyPage.retentionText")}</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.rights")}
            </h2>
            <p>
              {t("privacyPage.rightsText")}{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:text-accent-hover transition-colors">
                {EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
              {t("privacyPage.cookies")}
            </h2>
            <p>{t("privacyPage.cookiesText")}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
