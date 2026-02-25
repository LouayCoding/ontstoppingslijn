"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerItem, viewportConfig } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function DienstenPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Onze diensten"
          title="Wat kunnen wij voor u doen?"
          subtitle="Professionele rioolservice en ontstoppingen door heel Nederland."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link
                href={`/diensten/${service.slug}`}
                className="group block bg-white rounded-2xl border border-divider/50 p-6 md:p-8 h-full hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                  Vanaf €{service.price}
                </span>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {service.details.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-baseline justify-between text-sm"
                    >
                      <span className="text-muted">{d.label}</span>
                      <span className="text-foreground font-medium">{d.price}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-medium text-accent group-hover:text-accent-hover transition-colors duration-300">
                  Meer info →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
