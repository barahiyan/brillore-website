import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageSquare, ClipboardList, Wrench, FileText, LifeBuoy } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const nodes = [
  { icon: MessageSquare, title: "Inquiry", text: "We capture your needs and operational context." },
  { icon: ClipboardList, title: "Site / needs assessment", text: "Scope, requirements, and site review." },
  { icon: Wrench, title: "Measurement / inspection", text: "Field execution by technical specialists." },
  { icon: FileText, title: "Technical reporting", text: "Clear, documented results you can act on." },
  { icon: LifeBuoy, title: "Follow-up support", text: "Ongoing assistance and recommendations." },
];

/** Interactive vertical pipeline with a scroll-driven gold progress line. */
export default function ServicesPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section className="container-xl py-20 md:py-28">
      <SectionHeading
        eyebrow="How We Work"
        title="An interactive service pipeline"
        subtitle="Every engagement flows through a clear, repeatable sequence — from first inquiry to long-term support."
        align="center"
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
        {/* Track */}
        <div className="absolute left-7 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
        {/* Progress fill */}
        <motion.div
          style={{ scaleY: lineHeight }}
          className="absolute left-7 top-0 h-full w-px origin-top bg-gold-grad md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10">
          {nodes.map((n, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-[auto,1fr] items-start gap-5 md:grid-cols-2 md:gap-10 ${
                  right ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Node marker */}
                <span className="absolute left-7 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-gold-grad shadow-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
                  </span>
                </span>

                {/* Card (offset to one side) */}
                <div className={`col-start-2 md:[direction:ltr] ${right ? "md:col-start-1" : "md:col-start-2"}`}>
                  <div className="glass card-hover group p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
                        <n.icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-label text-gold/70">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-fog">{n.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{n.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
