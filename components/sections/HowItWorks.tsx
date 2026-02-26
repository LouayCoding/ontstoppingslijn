"use client";

import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n-context";

const STEP_KEYS = ["step1", "step2", "step3"];
const STEP_NUMBERS = ["01", "02", "03"];

interface HowItWorksProps {
  stad?: string;
}

export default function HowItWorks({ stad }: HowItWorksProps) {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-[700px] px-6">
        <div className="text-center mb-14 md:mb-20 reveal">
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {stad ? t("stad.howItWorksEyebrow", { stad }) : t("howItWorks.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold">
            {t("howItWorks.title")}
          </h2>
        </div>

        <div className="flex flex-col gap-0 relative reveal-stagger">
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-divider" />
          {STEP_KEYS.map((key, i) => (
            <div key={key} className="flex gap-6 relative pb-10 last:pb-0">
              <div className="relative z-10 shrink-0 w-[47px] h-[47px] rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-heading font-bold text-accent">
                  {STEP_NUMBERS[i]}
                </span>
              </div>
              <div className="pt-2.5">
                <h3 className="text-base font-heading font-semibold mb-1.5">
                  {t(`howItWorks.steps.${key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`howItWorks.steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-7 py-3 rounded-full hover:bg-accent-hover transition-colors btn-press"
          >
            {t("howItWorks.callButton", { phone: PHONE_NUMBER })}
          </a>
        </div>
      </div>
    </section>
  );
}
