import { useReducedMotion } from "framer-motion";

const items = [
  "Oil Flow Measurement",
  "Flow Meter Verification",
  "Pipeline Pigging",
  "Tank Thickness Inspection",
  "Cathodic Protection",
  "Fire Safety Systems",
  "Marine Technical Support",
  "Technical Reporting",
  "Asset Integrity",
];

/** Continuous, seamless capability marquee. Pauses motion for reduced-motion users. */
export default function Marquee() {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-800/40 py-5">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />

      <div
        className={`flex w-max items-center gap-8 ${reduce ? "" : "animate-marquee"}`}
        aria-hidden
      >
        {loop.map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-fog/55">{t}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
