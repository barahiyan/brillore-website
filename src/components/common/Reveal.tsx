import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Fade-up on scroll into view (GPU-cheap: opacity + transform only). */
export default function Reveal({ children, delay = 0, y = 30, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container for grids of cards. */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};
