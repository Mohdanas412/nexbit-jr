import React from "react";
import { Trophy } from "lucide-react";

export default function BadgesCarousel({ badges }: { badges: { id: string; name: string; unlocked?: boolean }[] }) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 py-2">
      {badges.map((b) => (
        <div key={b.id} className="min-w-[160px] snap-center">
          <div className={`shine-mask relative rounded-2xl p-4 border-2 ${b.unlocked ? "border-primary bg-white" : "border-dashed bg-muted"}`}>
            <div className={`w-12 h-12 rounded-full grid place-items-center mx-auto ${b.unlocked ? "bg-primary/10" : "bg-muted-foreground/10"}`}>
              <Trophy className={`${b.unlocked ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <p className="text-center mt-2 text-sm font-semibold">{b.name}</p>
            <p className="text-center text-xs text-muted-foreground">{b.unlocked ? "Unlocked" : "Locked"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
