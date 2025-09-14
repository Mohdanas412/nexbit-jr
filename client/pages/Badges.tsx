import BadgesCarousel from "@/components/badges/BadgesCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Mascot from "@/components/Mascot";
import { Link } from "react-router-dom";

const allBadges: {
  id: string;
  name: string;
  unlocked?: boolean;
  desc: string;
}[] = [
  {
    id: "b1",
    name: "First Lesson",
    unlocked: true,
    desc: "Complete your first lesson",
  },
  {
    id: "b2",
    name: "7-Day Streak",
    unlocked: true,
    desc: "Practice 7 days in a row",
  },
  {
    id: "b3",
    name: "Bug Fixer",
    unlocked: false,
    desc: "Solve a debugging challenge",
  },
  {
    id: "b4",
    name: "Quiz Master",
    unlocked: false,
    desc: "Score 100% on a quiz",
  },
  { id: "b5", name: "Early Bird", unlocked: false, desc: "Study before 9am" },
  { id: "b6", name: "Night Owl", unlocked: false, desc: "Study after 9pm" },
];

export default function BadgesPage() {
  const unlocked = allBadges.filter((b) => b.unlocked);
  const locked = allBadges.filter((b) => !b.unlocked);

  return (
    <section className="container py-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Your progress</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Badges</h1>
        </div>
        <Mascot className="w-16 h-16" mood="happy" />
      </div>

      <Card className="shadow-md mt-6">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-bold">Recent badges</p>
            <Button asChild size="sm" variant="outline">
              <Link to="/learning">Earn more</Link>
            </Button>
          </div>
          <BadgesCarousel badges={allBadges} />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Card className="shadow-md">
          <CardContent className="p-5">
            <p className="font-bold mb-2">Unlocked ({unlocked.length})</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {unlocked.map((b) => (
                <div key={b.id} className="rounded-lg border p-3 bg-primary/5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{b.name}</span>
                    <Badge variant="secondary">Unlocked</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-5">
            <p className="font-bold mb-2">Locked ({locked.length})</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {locked.map((b) => (
                <div key={b.id} className="rounded-lg border p-3 bg-muted">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{b.name}</span>
                    <Badge variant="outline">Locked</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Tip: Do a quick mini-lesson to unlock more.
        </p>
        <div className="mt-3">
          <Button asChild size="lg">
            <Link to="/learning">Start a mini-lesson</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
