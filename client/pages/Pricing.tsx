import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const featuresFree = [
  "Daily AI chat (limited)",
  "Micro lessons & quizzes",
  "Streaks and basic badges",
  "Community leaderboard",
];

const featuresPro = [
  "Unlimited AI chat",
  "Advanced challenges",
  "All badges + cosmetics",
  "Priority support",
];

export default function PricingPage() {
  return (
    <section className="container py-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Choose your plan</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Start free and upgrade anytime for unlimited AI help and extra challenges.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <PlanCard title="Free" price="$0" period="forever" cta="Get Started" features={featuresFree} highlight={false} />
        <PlanCard title="Premium" price="$9" period="per month" cta="Go Premium" features={featuresPro} highlight={true} />
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">No credit card required to start. Cancel anytime.</p>
    </section>
  );
}

function PlanCard({ title, price, period, cta, features, highlight }: { title: string; price: string; period: string; cta: string; features: string[]; highlight?: boolean }) {
  return (
    <Card className={highlight ? "border-primary shadow-lg" : "shadow"}>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <Check className="text-primary" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild size="lg" className={highlight ? "w-full" : undefined}><Link to="/auth">{cta}</Link></Button>
        </div>
      </CardContent>
    </Card>
  );
}
