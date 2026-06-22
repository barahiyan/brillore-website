import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Site-wide theme (dark default + warm-paper light).
 *
 * Theming is value-only: the `light` class on <html> swaps the CSS variables
 * defined in globals.css, so no component changes the classes it renders.
 * The choice is persisted to localStorage; index.html applies it pre-paint to
 * avoid a flash.
 */

export type Theme = "dark" | "light";
const STORAGE_KEY = "brillore-theme";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeCtx | null>(null);

function readInitial(): Theme {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("light")) {
    return "light";
  }
  if (typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY) === "light") {
    return "light";
  }
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitial);

  const apply = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("light", t === "light");
    // keep the mobile browser chrome in sync with the surface colour
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#f5f1e9" : "#050505");
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* storage may be unavailable; theme still applies for the session */
    }
  }, []);

  useEffect(() => {
    apply(theme);
  }, [theme, apply]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
