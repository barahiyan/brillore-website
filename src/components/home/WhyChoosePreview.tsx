import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal, { staggerParent, staggerItem } from "../common/Reveal";
import AnimatedCounter from "../common/AnimatedCounter";
import { whyChoose } from "../../data/content";

const stats = [
  { value: 5, suffix: "+", label: "Years of operation" },
  { value: 3, suffix: "", label: "Core service disciplines" },
  { value: 100, suffix: "%", label: "Reporting transparency" },
];

export default function WhyChoosePreview() {
  return (
    <section className="container-xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading + stats */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why Choose Brillore"
            title="Dependable results, clearly reported"
            subtitle="We pair technical accuracy with practical delivery, so you get measurements you can trust and reports you can act on."
          />

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <Reveal key={s.label} className="glass metal-top relative overflow-hidden p-4 text-center">
                <div className="font-serif text-3xl font-semibold text-gold-soft">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-[11px] leading-tight text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: reasons */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-3 lg:col-span-7"
        >
          {whyChoose.map((w) => (
            <motion.li
              key={w.title}
              variants={staggerItem}
              className="glass card-hover group flex items-start gap-4 p-5"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-grad text-ink-900">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-semibold text-fog">{w.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{w.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
