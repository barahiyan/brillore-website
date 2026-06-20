import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-fog sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-[58ch] text-base leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
