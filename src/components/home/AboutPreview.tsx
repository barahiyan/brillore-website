import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal, { staggerParent, staggerItem } from "../common/Reveal";
import { ShieldCheck, Target, BadgeCheck } from "lucide-react";
import { highlights } from "../../data/content";

const icons = [Target, ShieldCheck, BadgeCheck];

export default function AboutPreview() {
  return (
    <section className="container-xl py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A technical service partner built around accuracy and trust"
            subtitle="Brillore Holdings specializes in metrology, inspection, and industrial support services. We help operators in oil and gas, fire safety, and marine sectors measure with confidence, verify with rigor, and operate with assurance."
          />
          <Reveal delay={0.1} className="mt-6 text-sm leading-relaxed text-muted">
            From petroleum measurement to inspection and technical reporting, our work is grounded in
            precision, regulatory awareness, and dependable service delivery.
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-1"
        >
          {highlights.map((h, i) => {
            const Ico = icons[i];
            return (
              <motion.div
                key={h.title}
                variants={staggerItem}
                className="glass card-hover metal-top relative flex items-start gap-5 overflow-hidden p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                  <Ico className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-fog">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
