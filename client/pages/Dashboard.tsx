import Mascot from "@/components/Mascot";
import StreakPill from "@/components/ui/streak-pill";
import JourneyBar from "@/components/ui/journey-bar";
import BadgesCarousel from "@/components/badges/BadgesCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Crown, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { playChime } from "@/lib/sfx";
import { Link } from "react-router-dom";

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
  const [rankGlow, setRankGlow] = useState(false);

  return (
    <section className="container py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> {greeting()}
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold">Welcome back to your journey</h1>
        </div>
        <Mascot className="w-20 h-20" mood={rankGlow ? "cheer" : "idle"} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <AlertDialog>
          <Card className="shadow-md dark:dark-card-glow dark:shadow-none">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="font-bold">Streak</p>
                <StreakPill days={7} />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Keep practicing daily to grow your streak!</p>
              <div className="mt-3 flex gap-2">
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm">Missed a day?</Button>
                </AlertDialogTrigger>
              </div>
            </CardContent>
          </Card>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">Streak broken</AlertDialogTitle>
              <div className="flex items-center gap-3 mt-2">
                <Mascot className="w-12 h-12" mood="sad" />
                <AlertDialogDescription>
                  Oh no! It happens. Turn on reminders and do a quick mini-lesson to start a new streak.
                </AlertDialogDescription>
              </div>
            </AlertDialogHeader>
            <AlertDialogAction>Got it</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>

        <Card className="shadow-md dark:dark-card-glow dark:shadow-none md:col-span-2">
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
        <Card className="shadow-md dark:dark-card-glow dark:shadow-none md:col-span-2">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold">Badges</p>
              <Button asChild size="sm" variant="outline"><Link to="/badges">View all</Link></Button>
            </div>
            <BadgesCarousel badges={badges} />
          </CardContent>
        </Card>
        <Card className="shadow-md dark:dark-card-glow dark:shadow-none">
          <CardContent className="p-5">
            <p className="font-bold flex items-center gap-2">Leaderboard <Crown className="text-accent" /></p>
            <p className="text-xs text-muted-foreground">Rank up to earn a crown glow!</p>
            <div className="mt-3 space-y-2 text-sm">
              {["Aisha", "Leo", "Maya", "You", "Kai"].map((n, i) => (
                <div key={n} className={`rounded-lg p-2 flex items-center justify-between ${n === "You" ? "bg-primary/10 dark:bg-primary/20 border border-primary dark:border-primary/60 dark:shadow-[0_0_8px_hsl(135_100%_40%_/_0.3)] glow-soft" : "bg-muted dark:bg-[#1E1E2F]"}`}>
                  <span className="font-semibold flex items-center gap-2">#{i + 1} {n} {n === "You" && rankGlow && <Crown className="text-accent dark:drop-shadow-[0_0_6px_hsl(45_100%_50%)] animate-crown-glow" />}</span>
                  <span className="text-muted-foreground">{200 - i * 15} XP</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              <Button asChild className="flex-1" size="sm"><Link to="/leaderboard"><Users className="mr-2" /> See full board</Link></Button>
              <Button variant="outline" size="sm" onClick={() => { setRankGlow(true); playChime("rank"); setTimeout(() => setRankGlow(false), 2500); }}>Test Rank-up</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
