import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTheme } from "./theme";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  /** Optional premium background image (masked into the matte-black backdrop). */
  bgImage?: string;
  /** Optional daytime variant shown on the light theme. */
  bgImageLight?: string;
}

/** Reusable interior-page hero: industrial backdrop, gold label, large heading. */
export default function PageHero({ eyebrow, title, subtitle, children, bgImage, bgImageLight }: PageHeroProps) {
  const { theme } = useTheme();
  const useDay = theme === "light" && !!bgImageLight;
  const src = useDay ? bgImageLight : bgImage;
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Optional photographic backdrop */}
      {src && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img
            src={src}
            alt=""
            className="pagehero-photo h-full w-full object-cover"
            style={{
              maskImage: "radial-gradient(ellipse 90% 85% at 60% 25%,#000,transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 60% 25%,#000,transparent 80%)",
              opacity: useDay ? 0.72 : 0.45,
            }}
            loading="eager"
            decoding="async"
          />
          {useDay ? (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg,rgba(245,241,233,0.98) 0%,rgba(245,241,233,0.88) 48%,rgba(245,241,233,0.16) 82%),linear-gradient(0deg,#F5F1E9 0%,rgba(245,241,233,0.08) 52%,rgba(245,241,233,0.18) 100%)",
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/10 to-ink-900" />
          )}
        </div>
      )}
      {/* Subtle grid backdrop (no discrete glow blob — the photo + body backdrop
          carry the warmth, keeping the hero from reading as an AI gradient blob). */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
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
          className="mt-5 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-fog sm:text-5xl md:text-6xl"
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
