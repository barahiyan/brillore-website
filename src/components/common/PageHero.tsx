import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  /** Optional premium background image (masked into the matte-black backdrop). */
  bgImage?: string;
}

/** Reusable interior-page hero: dark industrial backdrop, gold label, large heading. */
export default function PageHero({ eyebrow, title, subtitle, children, bgImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Optional photographic backdrop */}
      {bgImage && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover opacity-25"
            style={{ maskImage: "radial-gradient(ellipse 80% 75% at 50% 30%,#000,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 30%,#000,transparent 75%)" }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/20 to-ink-900" />
        </div>
      )}
      {/* Radial glow + grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-radial-gold opacity-70 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#d6a84f 1px,transparent 1px),linear-gradient(90deg,#d6a84f 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%,#000,transparent)",
          }}
        />
      </div>

      <div className="container-xl relative">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-fog sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {subtitle}
        </motion.p>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
