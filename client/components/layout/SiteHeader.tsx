import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Mascot from "@/components/Mascot";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { isSfxEnabled, setSfxEnabled } from "@/lib/sfx";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/badges", label: "Badges" },
    { to: "/leaderboard", label: "Leaderboard" },
    { to: "/pricing", label: "Pricing" },
  ];
  const [sfx, setSfx] = useState(true);
  useEffect(() => { setSfx(isSfxEnabled()); }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mascot className="w-8 h-8" />
          <span className="font-extrabold text-lg tracking-tight">Nexbit <span className="text-primary">Jr</span></span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors",
                  isActive || location.pathname === l.to ? "text-foreground" : undefined,
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span>Sound</span>
            <Switch checked={sfx} onCheckedChange={(v) => { setSfx(v); setSfxEnabled(v); }} />
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/auth">Sign in</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 shadow">
            <Link to="/auth">Start Learning</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
