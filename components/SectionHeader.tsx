"use client";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 mb-14 md:mb-20 reveal ${alignment}`}>
      <span className="inline-flex bg-accent/10 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full w-fit">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold max-w-[20ch]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-[50ch]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
