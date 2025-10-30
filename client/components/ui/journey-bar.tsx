import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function JourneyBar({ current, total }: { current: number; total: number }) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));
  const [w, setW] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setW(percentage));
    return () => cancelAnimationFrame(id);
  }, [percentage]);
  const checkpoints = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="relative">
      <div className="h-3 rounded-full bg-muted dark:bg-[#1E1E2F] overflow-hidden">
        <div
          className={cn("h-full bg-gradient-to-r from-secondary to-primary xp-stripes dark:xp-wave", "transition-[width] duration-700 ease-out dark:shadow-[0_0_12px_hsl(135_100%_40%_/_0.5)]")}
          style={{ width: `${w}%`, boxShadow: w > 0 ? "0 0 16px hsl(135 100% 40% / 0.4)" : undefined }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs">
        {checkpoints.map((i) => (
          <div key={i} className={cn("w-6 h-6 rounded-full grid place-items-center font-bold", i <= current ? "bg-primary text-card dark:bg-primary dark:text-card dark:shadow-[0_0_8px_hsl(135_100%_40%_/_0.6)]" : "bg-muted dark:bg-[#1E1E2F] text-foreground/60 dark:text-muted-foreground")}>{i}</div>
        ))}
      </div>
    </div>
  );
}
