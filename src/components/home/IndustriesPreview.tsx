import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import IndustryCard from "../common/IndustryCard";
import { staggerParent } from "../common/Reveal";
import { industries } from "../../data/content";

export default function IndustriesPreview() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Soft divider glow */}
      <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl divider-gold" />

      <div className="container-xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across the sectors that demand precision"
          subtitle="From petroleum terminals to marine facilities, our services support operations where accuracy and safety are non-negotiable."
          align="center"
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((ind) => (
            <IndustryCard key={ind.name} name={ind.name} icon={ind.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
