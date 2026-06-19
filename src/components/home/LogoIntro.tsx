import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../common/Logo";

interface LogoIntroProps {
  onDone: () => void;
}

/**
 * Premium logo preloader. Dark backdrop + gold light sweep over the official logo.
 * Auto-dismisses after ~2.2s; also dismisses instantly if reduced motion is preferred.
 */
export default function LogoIntro({ onDone }: LogoIntroProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduce ? 300 : 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Radial glow */}
          <div aria-hidden className="absolute inset-0 bg-radial-gold opacity-60" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-full"
            >
              <Logo className="h-28 w-28 md:h-36 md:w-36" glow />
              {/* Light sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 animate-sweep bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 text-center"
            >
              <p className="font-serif text-2xl font-semibold tracking-wide text-fog">
                Brillore Holdings
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-label text-gold">
                Precision · Compliance · Reliability
              </p>
            </motion.div>

            {/* Loading line */}
            <motion.div className="mt-7 h-px w-44 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gold-grad"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
