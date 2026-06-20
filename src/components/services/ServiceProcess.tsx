import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { staggerParent, staggerItem } from "../common/Reveal";
import { serviceProcess } from "../../data/services";

/** Connected horizontal stepper: Inquiry to Support. */
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

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent lg:block"
          />

          <motion.ol
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-10 sm:mx-auto sm:max-w-md lg:max-w-none lg:grid-cols-5 lg:gap-4"
          >
            {serviceProcess.map((p) => (
              <motion.li
                key={p.step}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center lg:px-2"
              >
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-ink-800 font-serif text-xl font-semibold text-gold-soft shadow-gold">
                  {p.step}
                </span>
                <h3 className="mt-5 text-base font-semibold text-fog">{p.title}</h3>
                <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted">{p.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
