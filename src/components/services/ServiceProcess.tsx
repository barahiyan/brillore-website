import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { staggerParent, staggerItem } from "../common/Reveal";
import { serviceProcess } from "../../data/services";

/** Compact horizontal process strip (Inquiry → Support). */
export default function ServiceProcess() {
  return (
    <section className="relative py-20 md:py-24">
      <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl divider-gold" />
      <div className="container-xl">
        <SectionHeading
          eyebrow="Service Process"
          title="Five steps from inquiry to ongoing support"
          align="center"
        />

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {serviceProcess.map((p) => (
            <motion.li
              key={p.step}
              variants={staggerItem}
              className="glass card-hover metal-top relative overflow-hidden p-6"
            >
              <span className="font-serif text-4xl font-semibold text-gold-grad">{p.step}</span>
              <h3 className="mt-3 text-base font-semibold text-fog">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
