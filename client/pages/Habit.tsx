import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Mascot from "@/components/Mascot";
import Confetti from "@/components/animations/Confetti";
import { playChime } from "@/lib/sfx";

function generateMonth(days = 30) {
  const today = days;
  return Array.from({ length: days }, (_, i) => ({ day: i + 1, done: Math.random() > 0.3 && i + 1 <= today }));
}

export default function HabitPage() {
  const [grid, setGrid] = useState(generateMonth());
  const [confetti, setConfetti] = useState(false);

  const streak = useMemo(() => {
    let s = 0;
    for (let i = grid.length - 1; i >= 0; i--) {
      if (grid[i].done) s++; else break;
    }
    return s;
  }, [grid]);

  const broken = useMemo(() => {
    const last = grid[grid.length - 1];
    return !last.done && streak === 0;
  }, [grid, streak]);

  function markTodayDone() {
    const copy = [...grid];
    copy[copy.length - 1] = { ...copy[copy.length - 1], done: true };
    setGrid(copy);
    setConfetti(true);
    playChime("confetti");
    setTimeout(() => setConfetti(false), 2500);
  }

  return (
    <section className="container py-10">
      <Confetti show={confetti} />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Habits & Streaks</h1>
        <Mascot className="w-14 h-14" mood={broken ? "sad" : streak >= 3 ? "cheer" : "idle"} />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Card className="shadow-md">
          <CardContent className="p-5">
            <p className="font-bold">Calendar</p>
            <div className="grid grid-cols-7 gap-2 mt-4">
              {grid.map((c) => (
                <div key={c.day} className={`aspect-square rounded-lg ${c.done ? "bg-primary/80" : "bg-muted"}`} title={`Day ${c.day}`} />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{streak > 0 ? `Current streak: ${streak} day${streak>1?"s":""}` : "No current streak"}</p>
              <Button size="sm" onClick={markTodayDone}>Mark today complete</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-5">
            <p className="font-bold">Tips</p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-2">
              <li>Set a daily reminder time.</li>
              <li>Do one tiny lesson—keep the habit alive!</li>
              <li>Missed a day? No worries, start a new streak.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
