import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Flame,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Mascot from "@/components/Mascot";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/40 dark:bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 dark:bg-primary/15 rounded-full blur-3xl" />
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
              <Sparkles className="w-4 h-4" /> AI-powered, kid-friendly coding
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Make coding a habit.
              <br />
              <span className="text-primary">
                Learn step by step, playfully.
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Nexbit Jr is your friendly coding sidekick. Short lessons,
              streaks, XP and badges keep you motivated every day.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild size="lg" className="text-base px-6 py-6">
                <Link to="/auth">Start Learning</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-base">
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <Flame className="text-accent" /> Streaks
              </div>
              <div className="inline-flex items-center gap-2">
                <Trophy className="text-primary" /> Badges
              </div>
              <div className="inline-flex items-center gap-2">
                <Users className="text-secondary" /> Leaderboard
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Mascot className="w-56 h-56 md:w-72 md:h-72" />
              <Card className="absolute -bottom-4 -right-6 rotate-3 shadow-xl dark:dark-card-glow dark:shadow-none">
                <CardContent className="p-4 flex items-center gap-3">
                  <Flame className="text-accent dark:drop-shadow-[0_0_4px_hsl(45_100%_50%)]" />
                  <div>
                    <p className="text-sm font-bold leading-none">
                      7-day streak
                    </p>
                    <p className="text-xs text-muted-foreground">Keep it up!</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="absolute -top-4 -left-6 -rotate-3 shadow-xl dark:dark-card-glow dark:shadow-none">
                <CardContent className="p-4 flex items-center gap-3">
                  <Trophy className="text-primary dark:drop-shadow-[0_0_4px_hsl(135_100%_40%)]" />
                  <div>
                    <p className="text-sm font-bold leading-none">+50 XP</p>
                    <p className="text-xs text-muted-foreground">
                      Lesson complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
          Built for daily progress
        </h2>
        <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
          Bite-sized lessons, gamified rewards, and an AI tutor always ready to
          help.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <Zap className="text-primary dark:drop-shadow-[0_0_6px_hsl(135_100%_40%)]" />
              ),
              title: "AI Tutor",
              desc: "Ask questions and get friendly, step-by-step help.",
            },
            {
              icon: (
                <Flame className="text-accent dark:drop-shadow-[0_0_6px_hsl(45_100%_50%)]" />
              ),
              title: "Daily Habit",
              desc: "Keep your streak alive with short, fun lessons.",
            },
            {
              icon: (
                <Trophy className="text-secondary dark:drop-shadow-[0_0_6px_hsl(192_100%_47%)]" />
              ),
              title: "Badges & XP",
              desc: "Earn badges and level up as you learn.",
            },
            {
              icon: (
                <Users className="text-primary dark:drop-shadow-[0_0_6px_hsl(135_100%_40%)]" />
              ),
              title: "Leaderboard",
              desc: "See how you rank with friends and classmates.",
            },
            {
              icon: (
                <Sparkles className="text-accent dark:drop-shadow-[0_0_6px_hsl(45_100%_50%)]" />
              ),
              title: "Micro Lessons",
              desc: "Multiple-choice quizzes and tiny puzzles.",
            },
            {
              icon: (
                <CheckCircle2 className="text-primary dark:drop-shadow-[0_0_6px_hsl(135_100%_40%)]" />
              ),
              title: "Ready for Backend",
              desc: "UI prepared for Supabase + OpenAI integration.",
            },
          ].map((f) => (
            <Card
              key={f.title}
              className="border-2 border-muted dark:border-[#1E1E2F] dark:dark-card-glow hover:border-primary/40 dark:hover:border-primary/60 transition-colors"
            >
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 grid place-items-center mb-3">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why it's fun */}
      <section className="py-14 bg-gradient-to-b from-white to-accent/20 dark:from-[#1C1C28] dark:to-[#1C1C28]/60">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Short lessons, streaks, and XP
            </h2>
            <p className="text-muted-foreground mt-2">
              Practice a little every day. Keep your streak alive, collect
              badges, and climb the leaderboard.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-primary dark:drop-shadow-[0_0_4px_hsl(135_100%_40%)]" />{" "}
                5-minute micro-lessons
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-primary dark:drop-shadow-[0_0_4px_hsl(135_100%_40%)]" />{" "}
                Fun multiple-choice and tiny coding puzzles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-primary dark:drop-shadow-[0_0_4px_hsl(135_100%_40%)]" />{" "}
                Hints powered by AI tutor
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link to="/auth">Join Free Today</Link>
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="shadow-md dark:dark-card-glow">
              <CardContent className="p-5">
                <p className="font-bold">Daily Task</p>
                <p className="text-sm text-muted-foreground">
                  Lesson 1 of 5 today
                </p>
                <div className="mt-4 h-2 rounded bg-muted dark:bg-[#1E1E2F]">
                  <div className="h-2 rounded bg-primary w-2/5 dark:shadow-[0_0_8px_hsl(135_100%_40%_/_0.6)]" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md dark:dark-card-glow">
              <CardContent className="p-5">
                <p className="font-bold">XP</p>
                <p className="text-sm text-muted-foreground">
                  Level 2 • 120/200 XP
                </p>
                <div className="mt-4 h-2 rounded bg-muted dark:bg-[#1E1E2F]">
                  <div className="h-2 rounded bg-secondary w-3/5 dark:shadow-[0_0_8px_hsl(192_100%_47%_/_0.5)]" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md dark:dark-card-glow">
              <CardContent className="p-5">
                <p className="font-bold">Badges</p>
                <p className="text-sm text-muted-foreground">
                  First Lesson • 7-Day Streak
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md dark:dark-card-glow">
              <CardContent className="p-5">
                <p className="font-bold">Leaderboard</p>
                <p className="text-sm text-muted-foreground">Top 5 this week</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="container py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Start free. Go pro soon.
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Free plan includes daily AI chat and limited lessons. Premium with
          unlimited chat and advanced challenges is coming soon.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg">
            <Link to="/auth">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
