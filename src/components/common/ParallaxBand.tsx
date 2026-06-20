import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ParallaxBandProps {
  image: string;
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
  eyebrow,
  title,
  subtitle,
  caption,
  cta,
  align = "left",
}: ParallaxBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Image is taller than the section and slides through it as you scroll.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-14%", "14%"]);
  const center = align === "center";

  return (
    <section ref={ref} className="relative flex min-h-[72vh] items-center overflow-hidden py-24 md:min-h-[80vh]">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[16%] h-[132%]">
        <img src={image} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </motion.div>

      {/* Cinematic overlays */}
      <div
        className={`absolute inset-0 ${
          center
            ? "bg-ink-900/60"
            : "bg-gradient-to-r from-ink-900 via-ink-900/70 to-ink-900/25"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />

      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] text-fog sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-5 text-base leading-relaxed text-fog/70 sm:text-lg ${center ? "mx-auto" : ""}`}>
              {subtitle}
            </p>
          )}
          {cta && (
            <Link to={cta.to} className="btn btn-primary mt-8">
              {cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          )}
        </motion.div>
      </div>

      {caption && (
        <span className="absolute bottom-6 left-0 right-0 mx-auto w-full px-5 text-center text-[10px] uppercase tracking-label text-gold/70 sm:px-8 sm:text-left">
          {caption}
        </span>
      )}
    </section>
  );
}
