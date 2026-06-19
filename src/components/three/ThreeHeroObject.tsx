import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero centerpiece: an abstract metrology flow-meter / gauge.
 *
 * Implemented with SVG + CSS + Framer Motion rather than WebGL — it stays
 * lightweight (no three.js bundle), renders identically on mobile, never
 * blocks page load, and respects prefers-reduced-motion. A true WebGL/R3F
 * object can be swapped in here later without touching the rest of the page.
 */
export default function ThreeHeroObject() {
  const reduce = useReducedMotion();

  // Tick marks around the dial.
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-0 rounded-full bg-radial-gold blur-2xl" />

      {/* Outer slow-rotating metallic ring */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4E7C5" />
              <stop offset="50%" stopColor="#D6A84F" />
              <stop offset="100%" stopColor="#B8892F" />
            </linearGradient>
            <radialGradient id="dial" cx="50%" cy="42%" r="65%">
              <stop offset="0%" stopColor="#1b1d20" />
              <stop offset="70%" stopColor="#0d0e10" />
              <stop offset="100%" stopColor="#050505" />
            </radialGradient>
          </defs>

          {/* Outer ring */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="url(#gold)" strokeWidth="2" opacity="0.55" />
          <circle cx="200" cy="200" r="176" fill="none" stroke="#26282c" strokeWidth="10" />
          <circle cx="200" cy="200" r="176" fill="none" stroke="url(#gold)" strokeWidth="1" opacity="0.4" />

          {/* Tick marks */}
          {ticks.map((i) => {
            const major = i % 5 === 0;
            const angle = (i / 60) * Math.PI * 2;
            const r1 = major ? 150 : 158;
            const r2 = 168;
            const x1 = 200 + r1 * Math.cos(angle);
            const y1 = 200 + r1 * Math.sin(angle);
            const x2 = 200 + r2 * Math.cos(angle);
            const y2 = 200 + r2 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={major ? "#D6A84F" : "#44474c"}
                strokeWidth={major ? 2 : 1}
                opacity={major ? 0.9 : 0.6}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Inner dial face (static) */}
      <div className="absolute inset-[18%] grid place-items-center">
        <svg viewBox="0 0 280 280" className="h-full w-full">
          <circle cx="140" cy="140" r="138" fill="url(#dial)" stroke="#2c2e32" strokeWidth="1.5" />
          {/* Concentric measurement arcs */}
          <circle cx="140" cy="140" r="108" fill="none" stroke="#D6A84F" strokeWidth="1" opacity="0.25" strokeDasharray="2 6" />
          <path
            d="M 140 32 A 108 108 0 0 1 248 140"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Crosshair, echoing the logo target motif */}
          <line x1="140" y1="92" x2="140" y2="188" stroke="#44474c" strokeWidth="1" />
          <line x1="92" y1="140" x2="188" y2="140" stroke="#44474c" strokeWidth="1" />
          <circle cx="140" cy="140" r="6" fill="url(#gold)" />
        </svg>
      </div>

      {/* Sweeping needle */}
      <motion.div
        className="absolute inset-[18%] origin-center"
        animate={reduce ? undefined : { rotate: [0, 200, 140, 260, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: reduce ? 140 : undefined }}
      >
        <svg viewBox="0 0 280 280" className="h-full w-full">
          <line x1="140" y1="140" x2="140" y2="44" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="44" r="4" fill="#F4E7C5" />
        </svg>
      </motion.div>

      {/* Readout chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="glass absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 text-center"
      >
        <span className="block text-[9px] uppercase tracking-label text-gold/80">Flow Verified</span>
        <span className="font-serif text-lg font-semibold text-fog">99.8% accuracy</span>
      </motion.div>
    </div>
  );
}
