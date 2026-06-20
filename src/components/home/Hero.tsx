import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ThreeHeroObject from "../three/ThreeHeroObject";
import AnimatedCounter from "../common/AnimatedCounter";
import { company } from "../../data/content";

/**
 * Optional cinematic hero video (desktop only). Set to null to use only the
 * static webp backdrop. The webp always remains the poster / mobile fallback.
 * HERO_VIDEO_FORMATS lists the files present in public/assets/videos/.
 */
const HERO_VIDEO_BASENAME: string | null = "./assets/videos/hero-loop";
const HERO_VIDEO_FORMATS: Array<"webm" | "mp4"> = ["webm", "mp4"];

type Word = { t: string; gold?: boolean };
const headlineLines: Word[][] = [
  [{ t: "Precision," }, { t: "Compliance" }],
  [{ t: "&" }, { t: "Reliability" }, { t: "for" }],
  [{ t: "Critical Industrial Operations", gold: true }],
];

const ease = [0.22, 1, 0.36, 1] as const;

const lineReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.25 + i * 0.12, ease },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.55 + i * 0.12, ease },
  }),
};

type Stat =
  | { value: number; suffix: string; label: string }
  | { text: string; label: string };
const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years of operation" },
  { value: 3, suffix: "", label: "Core disciplines" },
  { text: company.iso, label: "Quality certified" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduce ? 1.06 : 1.18]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.4]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background layers */}
      <motion.div aria-hidden style={{ opacity: fadeOut }} className="pointer-events-none absolute inset-0">
        {/* Cinematic industrial backdrop — kept clearly visible on the right, fading into matte black on the left */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
          {HERO_VIDEO_BASENAME ? (
            <video
              className="absolute inset-0 hidden h-full w-full object-cover opacity-[0.62] md:block"
              autoPlay
              muted
              loop
              playsInline
              poster="./assets/images/hero-terminal.webp"
              style={{
                maskImage: "linear-gradient(90deg,transparent,#000 40%,#000 100%)",
                WebkitMaskImage: "linear-gradient(90deg,transparent,#000 40%,#000 100%)",
              }}
            >
              {HERO_VIDEO_FORMATS.map((f) => (
                <source key={f} src={`${HERO_VIDEO_BASENAME}.${f}`} type={`video/${f}`} />
              ))}
            </video>
          ) : null}
          <img
            src="./assets/images/hero-terminal.webp"
            alt=""
            className={`absolute inset-0 h-full w-full object-cover opacity-[0.55] ${
              HERO_VIDEO_BASENAME ? "md:hidden" : ""
            }`}
            style={{
              maskImage: "linear-gradient(90deg,transparent 2%,#000 44%,#000 100%)",
              WebkitMaskImage: "linear-gradient(90deg,transparent 2%,#000 44%,#000 100%)",
            }}
            decoding="async"
          />
        </motion.div>

        {/* Matte-black base on the left so text stays crisp; right side reveals the footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/60 to-ink-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/50" />
        {/* Mobile has no left/right split, so darken the footage a touch for readability */}
        <div className="absolute inset-0 bg-ink-900/35 md:hidden" />
        <div className="absolute right-0 top-0 h-[560px] w-[560px] translate-x-1/3 rounded-full bg-radial-gold opacity-30 blur-2xl" />

        {/* Soft gold light sweep */}
        {!reduce && (
          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/3"
            style={{ background: "linear-gradient(105deg,transparent,rgba(214,168,79,0.06),transparent)" }}
            animate={{ x: ["0%", "460%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          />
        )}
      </motion.div>

      <div className="container-xl relative grid items-center gap-10 pb-20 lg:grid-cols-12 lg:gap-6 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pr-8">
          {/* Credential pill */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-medium tracking-wide text-fog/80">
              {company.category}
            </span>
          </motion.div>

          <h1 className="mt-6 font-serif text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-fog sm:text-6xl lg:text-[4.2rem]">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={lineReveal}
                initial="hidden"
                animate="show"
                className="block"
              >
                {line.map((w, j) => (
                  <span key={j} className={w.gold ? "text-gold-grad" : ""}>
                    {w.t}
                    {j < line.length - 1 ? " " : ""}
                  </span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            Dependable measurement, inspection, and safety services for oil, gas, industrial, and
            marine operations.
          </motion.p>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/services" className="btn btn-primary">
              Explore Services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Request Consultation
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Animated stat strip (replaces generic dot row) */}
          <motion.dl
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-800/95 px-4 py-4">
                <dd className="font-serif text-2xl font-semibold text-gold-soft sm:text-3xl">
                  {"value" in s ? <AnimatedCounter value={s.value} suffix={s.suffix} /> : s.text}
                </dd>
                <dt className="mt-1 text-[11px] leading-tight text-fog/70">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          style={{ y: visualY }}
          className="relative lg:col-span-5"
        >
          <div className="animate-floaty">
            <ThreeHeroObject />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
