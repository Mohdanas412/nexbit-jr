import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="container py-20 text-center">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{description}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild><Link to="/auth">Start Learning</Link></Button>
        <Button asChild variant="outline"><Link to="/">Back Home</Link></Button>
      </div>
    </section>
  );
}
