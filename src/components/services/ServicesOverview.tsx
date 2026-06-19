import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { Gauge, Flame, Ship, ClipboardCheck } from "lucide-react";

const pills = [
  { icon: Gauge, label: "Oil & Gas Measurements" },
  { icon: Flame, label: "Fire Safety Systems" },
  { icon: Ship, label: "Marine Services" },
  { icon: ClipboardCheck, label: "Inspection Support" },
];

export default function ServicesOverview() {
  return (
    <section className="container-xl py-16 md:py-20">
      <SectionHeading
        eyebrow="Overview"
        title="Specialized technical services across critical sectors"
        subtitle="Brillore Holdings provides technical services across oil and gas measurements, fire safety systems, marine services, and industrial inspection support — delivered with precision and clear reporting."
      />
      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
        {pills.map((p) => (
          <span
            key={p.label}
            className="glass inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-fog/90"
          >
            <p.icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
            {p.label}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
