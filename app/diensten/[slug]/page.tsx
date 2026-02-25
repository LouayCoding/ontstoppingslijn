import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Loodgieter`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <ServiceDetailClient service={service} />

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                Direct regelen
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                {service.title} nodig?
              </h2>
              <p className="text-muted text-base max-w-[40ch] mb-6">
                Neem contact op voor een afspraak. Snel, vakkundig en eerlijk geprijsd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center bg-accent text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-accent-hover transition-colors"
                >
                  Bel {PHONE_NUMBER}
                </a>
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center border border-divider text-foreground font-medium text-sm px-6 py-3 rounded-full hover:border-muted transition-colors"
                >
                  Afspraak maken
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            Andere diensten
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="group block bg-white rounded-2xl border border-divider/50 p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  Vanaf €{s.price}
                </span>
                <h3 className="text-lg font-heading font-semibold group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
