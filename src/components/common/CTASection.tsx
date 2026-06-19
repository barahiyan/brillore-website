import { Link } from "react-router-dom";
import Reveal from "./Reveal";

interface CTAButton {
  label: string;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttons: CTAButton[];
}

export default function CTASection({ title, subtitle, buttons }: CTASectionProps) {
  return (
    <section className="container-xl py-20 md:py-28">
      <Reveal className="glass metal-top relative overflow-hidden px-6 py-14 text-center md:px-16 md:py-20">
        {/* Glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-radial-gold blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-radial-gold blur-2xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-fog sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">{subtitle}</p>
          )}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((b) => {
              const cls = `btn ${b.variant === "ghost" ? "btn-ghost" : "btn-primary"}`;
              if (b.href) {
                return (
                  <a key={b.label} href={b.href} className={cls}>
                    {b.label}
                  </a>
                );
              }
              return (
                <Link key={b.label} to={b.to ?? "/"} className={cls}>
                  {b.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
