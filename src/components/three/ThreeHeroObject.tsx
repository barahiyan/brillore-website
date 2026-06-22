import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../common/theme";

/**
 * Hero centerpiece: an abstract metrology flow-meter / gauge.
 *
 * Implemented with SVG + CSS + Framer Motion rather than WebGL — it stays
 * lightweight (no three.js bundle), renders identically on mobile, never
 * blocks page load, and respects prefers-reduced-motion. A true WebGL/R3F
 * object can be swapped in here later without touching the rest of the page.
 *
 * Colours are theme-aware: a matte-black instrument on dark, a polished
 * champagne/cream instrument with deeper gold on the light (warm-paper) theme.
 */
export default function ThreeHeroObject() {
  const reduce = useReducedMotion();
  const { theme } = useTheme();
  const light = theme === "light";

  // Palette per theme — gold gradient deepens on light so it keeps contrast on
  // paper; the dial face flips from matte black to warm cream.
  const goldStops = light
    ? ["#D6A84F", "#B8892F", "#9A6F22"]
    : ["#F4E7C5", "#D6A84F", "#B8892F"];
  const dialStops = light
    ? ["#FFFFFF", "#F4EEE1", "#E8DECA"]
    : ["#1b1d20", "#0d0e10", "#050505"];
  const ringStroke = light ? "#E0D2B0" : "#26282c";
  const dialStroke = light ? "#CFC0A0" : "#2c2e32";
  const tickMajor = light ? "#A6781F" : "#D6A84F";
  const tickMinor = light ? "#8C7E62" : "#44474c";
  const crosshair = light ? "#8C7E62" : "#44474c";
  const needleTip = light ? "#A6781F" : "#F4E7C5";
  // Minor ticks + the dotted measurement ring need more presence on the cream face.
  const minorOpacity = light ? 0.85 : 0.6;
  const dotStroke = light ? "#A6781F" : "#D6A84F";
  const dotOpacity = light ? 0.6 : 0.25;

  // Tick marks around the dial.
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      style={{
        filter: light
          ? "drop-shadow(0 28px 34px rgba(92,65,18,0.18))"
          : "drop-shadow(0 28px 38px rgba(0,0,0,0.55))",
      }}
    >
      {/* Concentric contrast plate: separates the instrument from changing
          footage without turning it into an opaque card. */}
      <div
        aria-hidden
        className="absolute inset-[2%] rounded-full"
        style={{
          background: light
            ? "radial-gradient(circle,rgba(245,241,233,0.94) 0%,rgba(245,241,233,0.78) 52%,rgba(245,241,233,0.22) 70%,transparent 76%)"
            : "radial-gradient(circle,rgba(5,5,5,0.84) 0%,rgba(5,5,5,0.64) 55%,rgba(5,5,5,0.1) 72%,transparent 78%)",
          boxShadow: light
            ? "inset 0 0 0 1px rgba(184,137,47,0.16)"
            : "inset 0 0 0 1px rgba(214,168,79,0.12)",
        }}
      />
      {/* Ambient glow */}
      <div aria-hidden className={`absolute inset-0 rounded-full bg-radial-gold blur-2xl ${light ? "opacity-90" : "opacity-70"}`} />

      {/* Outer slow-rotating metallic ring */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={goldStops[0]} />
              <stop offset="50%" stopColor={goldStops[1]} />
              <stop offset="100%" stopColor={goldStops[2]} />
            </linearGradient>
            <radialGradient id="dial" cx="50%" cy="42%" r="65%">
              <stop offset="0%" stopColor={dialStops[0]} />
              <stop offset="70%" stopColor={dialStops[1]} />
              <stop offset="100%" stopColor={dialStops[2]} />
            </radialGradient>
          </defs>

          {/* Outer ring */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="url(#gold)" strokeWidth={light ? 2.6 : 2} opacity={light ? 0.9 : 0.65} />
          <circle cx="200" cy="200" r="176" fill="none" stroke={ringStroke} strokeWidth={light ? 12 : 10} />
          <circle cx="200" cy="200" r="176" fill="none" stroke="url(#gold)" strokeWidth={light ? 1.8 : 1} opacity={light ? 0.75 : 0.48} />

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
                stroke={major ? tickMajor : tickMinor}
                strokeWidth={major ? 2 : 1}
                opacity={major ? 0.9 : minorOpacity}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Inner dial face (static) */}
      <div className="absolute inset-[18%] grid place-items-center">
        <svg viewBox="0 0 280 280" className="h-full w-full">
          <circle cx="140" cy="140" r="138" fill="url(#dial)" stroke={dialStroke} strokeWidth="1.5" />
          {/* Concentric measurement arcs */}
          <circle cx="140" cy="140" r="108" fill="none" stroke={dotStroke} strokeWidth={light ? 1.4 : 1} opacity={dotOpacity} strokeDasharray="2 6" />
          <path
            d="M 140 32 A 108 108 0 0 1 248 140"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Crosshair, echoing the logo target motif */}
          <line x1="140" y1="92" x2="140" y2="188" stroke={crosshair} strokeWidth="1" />
          <line x1="92" y1="140" x2="188" y2="140" stroke={crosshair} strokeWidth="1" />
          <circle cx="140" cy="140" r="6" fill="url(#gold)" />
        </svg>
      </div>

      {/* Sweeping needle */}
      <motion.div
        key={`sweep-${theme}`}
        data-dial-sweep
        className="absolute inset-[18%] origin-center"
        initial={{ rotate: reduce ? 140 : 0 }}
        animate={{ rotate: reduce ? 140 : 360 }}
        transition={reduce ? { duration: 0 } : { duration: 9.6, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 280 280" className="h-full w-full">
          <motion.circle
            cx="140"
            cy="44"
            fill={needleTip}
            animate={reduce ? { r: 10, opacity: light ? 0.16 : 0.12 } : { r: [9, 12, 9], opacity: [0.12, 0.24, 0.12] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          />
          <circle cx="140" cy="44" r="5.5" fill={needleTip} />
          <circle cx="138.5" cy="42.5" r="1.4" fill="#FFFFFF" opacity={light ? 0.8 : 0.95} />
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
