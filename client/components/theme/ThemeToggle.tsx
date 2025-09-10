import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "nexbitjr_theme";

function getInitial(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitial());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark"); else root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, theme);
    root.style.transition = "background-color .3s ease, color .3s ease";
    const t = setTimeout(() => { root.style.transition = ""; }, 350);
    return () => clearTimeout(t);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border bg-background hover:shadow-lg active:scale-95 transition-all"
    >
      <span className="relative grid place-items-center">
        <Sun className={`absolute transition-all duration-300 ${theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"}`} />
        <Moon className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"}`} />
      </span>
    </button>
  );
}
