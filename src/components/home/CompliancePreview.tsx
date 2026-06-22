import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import { staggerParent, staggerItem } from "../common/Reveal";
import { compliance } from "../../data/content";

export default function CompliancePreview() {
  return (
    <section className="container-xl py-20 md:py-28">
      <SectionHeading
        title="Credentials that underpin our service quality"
        subtitle="Brillore operates with verified credentials and a quality-management foundation that supports professional, compliant delivery."
      />

      {/* Credential bar: one panel divided by hairlines, deliberately distinct
          from the elevated card grids elsewhere on the page so the flow varies. */}
      <motion.dl
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="glass metal-top relative mt-12 grid divide-line overflow-hidden md:grid-cols-3 md:divide-x"
      >
        {compliance.map((c) => (
          <motion.div
            key={c.title}
            variants={staggerItem}
            className="flex items-start gap-4 border-b border-line p-7 last:border-b-0 md:border-b-0"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
              <Icon name={c.icon} className="h-5 w-5" />
            </span>
            <div>
              <dt className="font-semibold text-fog">{c.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{c.text}</dd>
            </div>
          </motion.div>
        ))}
      </motion.dl>

      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted/80">
        Credential documents are available on request during formal engagement and due diligence.
      </p>
    </section>
  );
}
