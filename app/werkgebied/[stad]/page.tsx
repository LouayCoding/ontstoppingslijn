import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSteden, getStadFromSlug, getStadSlug } from "@/lib/steden";
import StadContent from "./StadContent";

interface StadPageProps {
  params: Promise<{
    stad: string;
  }>;
}

export async function generateStaticParams() {
  const steden = getAllSteden();
  return steden.map((stad) => ({
    stad: getStadSlug(stad),
  }));
}

export async function generateMetadata({ params }: StadPageProps): Promise<Metadata> {
  const { stad: stadSlug } = await params;
  const stad = getStadFromSlug(stadSlug);

  if (!stad) {
    return { title: "Stad niet gevonden" };
  }

  return {
    title: `Rioolservice ${stad} | Loodgieter`,
    description: `Professionele rioolservice in ${stad}. Riool ontstoppen, afvoer ontstoppen, inspectie en reparatie. 24/7 spoedservice. Direct online plannen.`,
    openGraph: {
      title: `Rioolservice ${stad}`,
      description: `Professionele rioolservice en ontstoppingen in ${stad} en omgeving.`,
    },
  };
}

export default async function StadPage({ params }: StadPageProps) {
  const { stad: stadSlug } = await params;
  const stad = getStadFromSlug(stadSlug);

  if (!stad) {
    notFound();
  }

  return <StadContent stad={stad} />;
}
