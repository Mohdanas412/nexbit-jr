import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

import { useEffect, useState } from "react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function getTheme(): ToasterProps["theme"] {
  if (typeof document === "undefined" || typeof window === "undefined")
    return "light";
  const saved = localStorage.getItem("nexbitjr_theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  return isDark ? "dark" : "light";
}

const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = useState<ToasterProps["theme"]>(getTheme());

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMedia = () => setTheme(getTheme());
    if (media.addEventListener) media.addEventListener("change", onMedia);
    else media.addListener(onMedia as any);

    const mo = new MutationObserver(() => setTheme(getTheme()));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onStorage = (e: StorageEvent) => {
      if (e.key === "nexbitjr_theme") setTheme(getTheme());
    };
    window.addEventListener("storage", onStorage);

    return () => {
      if (media.removeEventListener)
        media.removeEventListener("change", onMedia);
      else media.removeListener(onMedia as any);
      mo.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
