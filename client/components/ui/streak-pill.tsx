import { Flame } from "lucide-react";

export default function StreakPill({ days }: { days: number }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 dark:bg-accent/30 px-3 py-1 text-sm font-bold text-foreground shadow-sm animate-[pulse_2s_ease-in-out_infinite] dark:shadow-[0_0_12px_hsl(45_100%_50%_/_0.3)]" style={{ boxShadow: "0 0 0 0 hsl(45 98% 51% / 0.5)" }}>
      <Flame className="text-accent dark:drop-shadow-[0_0_4px_hsl(45_100%_50%)]" />
      <span>{days}-day streak</span>
    </div>
  );
}
