import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./theme";

interface ParallaxBandProps {
  image: string;
  /** Optional daytime variant shown (clean, no overlay) on the light theme. */
  lightImage?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Neutral caption (e.g. "Operational Environments"). Never a project claim. */
  caption?: string;
  cta?: { label: string; to: string };
  /** Visual alignment of the text content. */
  align?: "left" | "center";
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Full-bleed cinematic band whose background image drifts on scroll (parallax),
 * carrying the imagery through the page beyond the hero. Dark gradients keep the
 * text crisp; the photo stays clearly visible. Respects reduced motion.
 */
export default function ParallaxBand({
  image,
  lightImage,
  eyebrow,
  title,
  subtitle,
  caption,
  cta,
  align = "left",
}: ParallaxBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { theme } = useTheme();
  // Light theme: editorial split with a clean image field. Dark theme:
  // cinematic full-bleed image with a controlled scrim.
  const light = theme === "light";
  const img = light && lightImage ? lightImage : image;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Image is taller than the section and slides through it as you scroll.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-14%", "14%"]);
  const center = align === "center";

  const titleColor = light ? "text-[#16130E]" : "text-white";
  const subColor = light ? "text-[#16130E]/72" : "text-white/70";

  const inner = (
    <>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-5 font-serif text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-[58ch] text-base leading-relaxed sm:text-lg ${subColor} ${!light && center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      {cta && (
        <Link to={cta.to} className="btn btn-primary mt-8">
          {cta.label}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      )}
    </>
  );

  /* Light mode uses an editorial split instead of placing a panel over the
     photograph. Both copy and image get their own visual field; `align=center`
     reverses the split to create rhythm between consecutive bands. */
  if (light) {
    return (
      <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="divider-gold absolute inset-x-0 top-0 mx-auto max-w-6xl" />
        <div className="container-xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease }}
              className={`lg:col-span-5 ${center ? "lg:order-2" : ""}`}
            >
              {inner}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, delay: 0.08, ease }}
              className={`relative lg:col-span-7 ${center ? "lg:order-1" : ""}`}
            >
              <div className="rounded-[2.25rem] bg-black/[0.035] p-2 ring-1 ring-black/[0.07]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-[#E9E1D3] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:min-h-[460px] lg:min-h-[560px]">
                  <motion.div style={{ y, willChange: "transform", backfaceVisibility: "hidden" }} className="absolute inset-x-0 -top-[14%] h-[128%]">
                    <img
                      src={img}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(255,255,255,0.28), inset 0 -90px 100px -90px rgba(22,19,14,0.38)",
                    }}
                  />
                  {caption && (
                    <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-label text-white/80 drop-shadow-sm">
                      {caption}
                    </span>
                  )}
                </div>
              </div>
              <div
                aria-hidden
                className={`absolute -bottom-5 h-16 w-24 border-b border-gold/35 ${
                  center ? "-left-5 border-l" : "-right-5 border-r"
                }`}
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative flex min-h-[72vh] items-center overflow-hidden py-24 md:min-h-[80vh]"
    >
      {/* Parallax photo */}
      <motion.div style={{ y, willChange: "transform", backfaceVisibility: "hidden" }} className="absolute inset-x-0 -top-[16%] h-[132%]">
        <img src={img} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </motion.div>

      <div
        className={`absolute inset-0 ${
          center
            ? "bg-[#050505]/60"
            : "bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/25"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />

      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
        >
          {inner}
        </motion.div>
      </div>

      {caption && (
        <span
          className="absolute bottom-6 left-0 right-0 mx-auto w-full px-5 text-center text-[10px] uppercase tracking-label text-gold/70 sm:px-8 sm:text-left"
        >
          {caption}
        </span>
      )}
    </section>
  );
}
