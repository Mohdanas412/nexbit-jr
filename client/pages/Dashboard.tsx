import Mascot from "@/components/Mascot";
import StreakPill from "@/components/ui/streak-pill";
import JourneyBar from "@/components/ui/journey-bar";
import BadgesCarousel from "@/components/badges/BadgesCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Users } from "lucide-react";
import { useMemo } from "react";

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good Morning, Coder!";
  if (h < 18) return "Good Afternoon, Coder!";
  return "Good Evening, Coder!";
}

export default function Dashboard() {
  const badges = useMemo(() => [
    { id: "b1", name: "First Lesson", unlocked: true },
    { id: "b2", name: "7-Day Streak", unlocked: true },
    { id: "b3", name: "Bug Fixer", unlocked: false },
    { id: "b4", name: "Quiz Master", unlocked: false },
  ], []);

  return (
    <section className="container py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> {greeting()}
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold">Welcome back to your journey</h1>
        </div>
        <Mascot className="w-20 h-20" mood="idle" />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card className="shadow-md">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold">Streak</p>
              <StreakPill days={7} />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Keep practicing daily to grow your streak!</p>
          </CardContent>
        </Card>

        <Card className="shadow-md md:col-span-2">
          <CardContent className="p-5">
            <p className="font-bold">XP & Level</p>
            <p className="text-sm text-muted-foreground">Level 3 • 140/200 XP</p>
            <div className="mt-3">
              <JourneyBar current={3} total={6} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Card className="shadow-md md:col-span-2">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold">Badges</p>
              <Button size="sm" variant="outline">View all</Button>
            </div>
            <BadgesCarousel badges={badges} />
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-5">
            <p className="font-bold flex items-center gap-2">Leaderboard <Crown className="text-accent" /></p>
            <p className="text-xs text-muted-foreground">Rank up to earn a crown glow!</p>
            <div className="mt-3 space-y-2 text-sm">
              {["Aisha", "Leo", "Maya", "You", "Kai"].map((n, i) => (
                <div key={n} className={`rounded-lg p-2 flex items-center justify-between ${n === "You" ? "bg-primary/10 border border-primary glow-soft" : "bg-muted"}`}>
                  <span className="font-semibold">#{i + 1} {n}</span>
                  <span className="text-muted-foreground">{200 - i * 15} XP</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-3" size="sm"><Users className="mr-2" /> See full board</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
