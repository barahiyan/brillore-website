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

/** Vertical left-rail pipeline with a scroll-driven gold progress line. */
export default function ServicesPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 65%"] });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section className="container-xl py-20 md:py-28">
      <SectionHeading
        eyebrow="How We Work"
        title="An interactive service pipeline"
        subtitle="Every engagement flows through a clear, repeatable sequence, from first inquiry to long-term support."
        align="center"
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-2xl">
        {/* Rail track + scroll progress fill (runs through the node centres at x=28px) */}
        <div className="absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px -translate-x-1/2 bg-line" />
        <motion.div
          style={{ scaleY: lineHeight, willChange: "transform" }}
          className="absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px origin-top -translate-x-1/2 bg-gold-grad"
        />

        <ol className="space-y-6">
          {nodes.map((n, i) => (
            <motion.li
              key={n.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-5"
            >
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/30 bg-ink-800 text-gold">
                <n.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div className="glass card-hover group flex-1 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-label text-gold/70">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-fog">{n.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{n.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
