import { cn } from "@/lib/utils";

export default function JourneyBar({ current, total }: { current: number; total: number }) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));
  const checkpoints = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="relative">
      <div className="h-3 rounded-full bg-muted overflow-hidden">
        <div
          className={cn("h-full bg-gradient-to-r from-secondary to-primary xp-stripes", "transition-[width] duration-700 ease-out")}
          style={{ width: `${percentage}%` }}
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
