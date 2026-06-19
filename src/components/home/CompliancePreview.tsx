import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import ComplianceCard from "../common/ComplianceCard";
import { staggerParent } from "../common/Reveal";
import { compliance } from "../../data/content";

export default function CompliancePreview() {
  return (
    <section className="container-xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Compliance & Accreditation"
        title="Credentials that underpin our service quality"
        subtitle="Brillore operates with verified credentials and a quality-management foundation that supports professional, compliant delivery."
        align="center"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
      >
        {compliance.map((c) => (
          <ComplianceCard key={c.title} title={c.title} text={c.text} icon={c.icon} />
        ))}
      </motion.div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted/80">
        Credential documents are available on request during formal engagement and due diligence.
      </p>
    </section>
  );
}
