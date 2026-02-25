import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CommonProblems from "@/components/sections/CommonProblems";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingTeaser from "@/components/sections/PricingTeaser";
import Werkgebied from "@/components/sections/Werkgebied";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <CommonProblems />
      <HowItWorks />
      <PricingTeaser />
      <Werkgebied />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
