"use client";

import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingTeaser from "@/components/sections/PricingTeaser";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function StadContent({ stad }: { stad: string }) {
  return (
    <>
      <Hero stad={stad} />
      <TrustStrip />
      <ServicesGrid stad={stad} />
      <HowItWorks stad={stad} />
      <PricingTeaser />
      <Reviews />
      <FAQ />
      <FinalCTA stad={stad} />
    </>
  );
}
