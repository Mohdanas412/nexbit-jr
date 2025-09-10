import { Flame } from "lucide-react";

export default function StreakPill({ days }: { days: number }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-bold text-foreground shadow-sm animate-[pulse_2s_ease-in-out_infinite]" style={{ boxShadow: "0 0 0 0 hsl(45 98% 51% / 0.5)" }}>
      <Flame className="text-accent" />
      <span>{days}-day streak</span>
    </div>
  );
}
