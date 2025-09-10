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
      <div className="h-3 rounded-full bg-muted overflow-hidden dark:bg-[#0b1220]">
        <div
          className={cn("h-full bg-gradient-to-r from-secondary to-primary xp-stripes dark:xp-wave", "transition-[width] duration-700 ease-out")}
          style={{ width: `${w}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs">
        {checkpoints.map((i) => (
          <div key={i} className={cn("w-6 h-6 rounded-full grid place-items-center", i <= current ? "bg-primary text-white" : "bg-muted text-foreground/60")}>{i}</div>
        ))}
      </div>
    </div>
  );
}
