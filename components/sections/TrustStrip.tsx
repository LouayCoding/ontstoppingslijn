"use client";

const STATS = [
  { value: "5.000+", label: "Verstoppingen opgelost" },
  { value: "4.9/5", label: "Klantbeoordeling" },
  { value: "24/7", label: "Spoedservice" },
  { value: "100%", label: "Professioneel" },
];

export default function TrustStrip() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center border border-divider/50"
            >
              <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
