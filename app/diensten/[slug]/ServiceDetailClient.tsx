"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface ServiceDetailClientProps {
  service: {
    title: string;
    price: string;
    description: string;
    image: string;
    details: { label: string; price: string }[];
  };
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
    >
      <div>
        <motion.span
          variants={item}
          className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4"
        >
          Vanaf €{service.price}
        </motion.span>
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6"
        >
          {service.title}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-[45ch]"
        >
          {service.description}
        </motion.p>
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted mb-4">
            Tarieven
          </h3>
          <ul className="flex flex-col gap-3">
            {service.details.map((d) => (
              <li
                key={d.label}
                className="flex items-baseline justify-between text-base border-b border-divider pb-3"
              >
                <span className="text-muted">{d.label}</span>
                <span className="text-foreground font-medium">{d.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div variants={item} className="relative aspect-[4/3] overflow-hidden rounded">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}
