import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { staggerParent } from "../common/Reveal";
import { coreBusiness } from "../../data/services";

export default function CoreBusinessPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Core Business Areas"
          title="Three disciplines, one standard of precision"
          subtitle="Specialized technical services that keep critical operations measured, safe, and compliant."
          align="center"
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {coreBusiness.map((c) => (
            <ServiceCard
              key={c.id}
              icon={c.icon}
              title={c.title}
              description={c.description}
              to="/services"
              cta="View services"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
