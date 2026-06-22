import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme";

/**
 * Dark/light switch. Reuses the site's line/fog tokens so it themes itself.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
      className={`grid h-10 w-10 place-items-center rounded-full border border-line text-fog/80 transition-colors hover:border-gold/50 hover:text-gold ${className}`}
    >
      {isLight ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
    </button>
  );
}
