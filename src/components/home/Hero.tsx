import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ThreeHeroObject from "../three/ThreeHeroObject";
import { company } from "../../data/content";

const trustItems = ["Metrology", "Inspection", "Technical Services", `Since ${company.since}`, company.iso];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Optional cinematic hero video (desktop only). Leave null to use the static
 * webp backdrop (current liked design). To enable: drop hero-loop.webm + .mp4
 * into public/assets/videos/ and set this to "./assets/videos/hero-loop".
 * The webp below always remains the poster / mobile fallback.
 */
const HERO_VIDEO_BASENAME: string | null = null;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll-driven depth: backdrop drifts + scales slightly; gauge counter-drifts.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.16]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.35]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background layers */}
      <motion.div aria-hidden style={{ opacity: fadeOut }} className="pointer-events-none absolute inset-0">
        {/* Cinematic industrial backdrop (parallax + depth), masked into matte black */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0"
        >
          {HERO_VIDEO_BASENAME ? (
            <video
              className="absolute inset-0 hidden h-full w-full object-cover opacity-[0.22] md:block"
              autoPlay
              muted
              loop
              playsInline
              poster="./assets/images/hero-terminal.webp"
              style={{
                maskImage: "radial-gradient(ellipse 85% 80% at 70% 35%,#000,transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 70% 35%,#000,transparent 75%)",
              }}
            >
              <source src={`${HERO_VIDEO_BASENAME}.webm`} type="video/webm" />
              <source src={`${HERO_VIDEO_BASENAME}.mp4`} type="video/mp4" />
            </video>
          ) : null}
          {/* Static backdrop — always present (poster on desktop video, sole image on mobile) */}
          <img
            src="./assets/images/hero-terminal.webp"
            alt=""
            className={`absolute inset-0 h-full w-full object-cover opacity-[0.22] ${
              HERO_VIDEO_BASENAME ? "md:hidden" : ""
            }`}
            style={{
              maskImage: "radial-gradient(ellipse 85% 80% at 70% 35%,#000,transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 70% 35%,#000,transparent 75%)",
            }}
            decoding="async"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-radial-gold opacity-70 blur-2xl" />

        {/* Soft gold light sweep */}
        {!reduce && (
          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/3"
            style={{
              background:
                "linear-gradient(105deg,transparent,rgba(214,168,79,0.10),transparent)",
            }}
            animate={{ x: ["0%", "420%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          />
        )}

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#d6a84f 1px,transparent 1px),linear-gradient(90deg,#d6a84f 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 70% at 60% 10%,#000,transparent)",
          }}
        />
      </motion.div>

      <div className="container-xl relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div>
          <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="eyebrow">
            {company.category}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 text-4xl font-semibold leading-[1.06] text-fog sm:text-5xl md:text-6xl"
          >
            Precision, Compliance &amp; Reliability for{" "}
            <span className="text-gold-grad">Critical Industrial Operations</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Brillore Holdings delivers dependable metrology, inspection, fire safety, and marine
            technical support services for oil, gas, industrial, and marine operations.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-4"
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

          {/* Trust indicators */}
          <motion.ul
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
          >
            {trustItems.map((t) => (
              <li key={t} className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual (counter-parallax depth) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: visualY }}
          className="relative lg:pl-8"
        >
          <div className="animate-floaty">
            <ThreeHeroObject />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
