import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function RootLayout() {
  const [bgGradient, setBgGradient] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateBg = () => {
      const h = new Date().getHours();
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);

      if (isDarkMode) {
        if (h < 12)
          setBgGradient(
            "linear-gradient(180deg, #0B132B 0%, #1C1C28 50%, #0B132B 100%)",
          );
        else if (h < 18)
          setBgGradient(
            "linear-gradient(180deg, #0D1B3E 0%, #1C1C28 50%, #0B132B 100%)",
          );
        else
          setBgGradient(
            "linear-gradient(180deg, #0B132B 0%, #1A1433 50%, #0B132B 100%)",
          );
      } else {
        if (h < 12)
          setBgGradient(
            "radial-gradient(ellipse at top left, #FFEAA7 0%, rgba(255,255,255,0.5) 40%, white 100%)",
          );
        else if (h < 18)
          setBgGradient(
            "radial-gradient(ellipse at top left, #CFFAFE 0%, rgba(207,250,254,0.3) 40%, white 100%)",
          );
        else
          setBgGradient(
            "radial-gradient(ellipse at top left, #E9D5FF 0%, rgba(233,213,255,0.3) 40%, white 100%)",
          );
      }
    };

    updateBg();
    const observer = new MutationObserver(updateBg);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col transition-colors duration-500"
      style={{ background: bgGradient }}
    >
      <div className="hidden dark:block dark-grid-overlay absolute inset-0 pointer-events-none" />
      <SiteHeader />
      <main className="flex-1 animate-[fadeIn_.4s_ease]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
