import { motion } from "framer-motion";
import { Gauge, Flame, Ship, ClipboardCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { staggerParent, staggerItem } from "../common/Reveal";
import { company } from "../../data/content";

const inquiries = [
  { icon: Gauge, title: "Oil & Gas Measurement Inquiry", interest: "Oil & Gas Measurements" },
  { icon: Flame, title: "Fire Safety Support Inquiry", interest: "Fire Safety Systems" },
  { icon: Ship, title: "Marine Service Inquiry", interest: "Marine Services" },
  { icon: ClipboardCheck, title: "Inspection & Reporting Inquiry", interest: "Inspection Support" },
];

/** Pre-fills a mailto with the chosen inquiry type. */
function inquiryHref(interest: string) {
  const subject = `Inquiry: ${interest}`;
  const body = `Hello Brillore Holdings,\n\nI'd like to inquire about: ${interest}.\n\nDetails:\n`;
  return `${company.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function QuickInquiryCards() {
  return (
    <section className="container-xl py-20 md:py-24">
      <SectionHeading
        eyebrow="Quick Inquiries"
        title="Start with the service you need"
        subtitle="Pick a topic to open a pre-filled email — or use the form for a detailed request."
        align="center"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {inquiries.map((q) => (
          <motion.a
            key={q.title}
            variants={staggerItem}
            href={inquiryHref(q.interest)}
            className="glass card-hover metal-top group relative overflow-hidden p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
              <q.icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-base font-semibold leading-snug text-fog">{q.title}</h3>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              Inquire
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
