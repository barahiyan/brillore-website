import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-radial-gold opacity-70 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#d6a84f 1px,transparent 1px),linear-gradient(90deg,#d6a84f 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 70% at 60% 10%,#000,transparent)",
          }}
        />
      </div>

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

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative animate-floaty lg:pl-8"
        >
          <ThreeHeroObject />
        </motion.div>
      </div>
    </section>
  );
}
