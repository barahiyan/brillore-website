interface LogoProps {
  className?: string;
  /** Adds an elegant gold glow + light-sweep presentation around the logo. */
  glow?: boolean;
}

/**
 * Renders the official Brillore logo. The PNG itself is never modified —
 * only subtle CSS presentation effects (glow, light sweep) are layered around it.
 */
export default function Logo({ className = "h-10 w-10", glow = false }: LogoProps) {
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      {glow && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-radial-gold blur-md"
        />
      )}
      <img
        src="./assets/logo/brilore-logo.png"
        alt="Brillore Holdings logo"
        className="relative h-full w-full object-contain drop-shadow-[0_4px_14px_rgba(214,168,79,0.35)]"
        decoding="async"
      />
    </span>
  );
}
