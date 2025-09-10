import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Mascot from "@/components/Mascot";

const colors = ["#22c55e", "#0ea5e9", "#f59e0b", "#a78bfa", "#ef4444"]; 
const hats = ["None", "Cap", "Wizard", "Coder"];

export default function ProfilePage() {
  const [color, setColor] = useState(colors[0]);
  const [hat, setHat] = useState(hats[0]);

  return (
    <section className="container py-10 grid md:grid-cols-2 gap-6 items-start">
      <Card className="shadow-md">
        <CardContent className="p-5">
          <p className="font-bold">Your Avatar</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="rounded-2xl p-4 border-2" style={{ borderColor: color }}>
              <Mascot className="w-32 h-32" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pick a color</p>
              <div className="flex gap-2 mt-1">
                {colors.map((c) => (
                  <button key={c} onClick={() => setColor(c)} className="w-6 h-6 rounded-full border" style={{ background: c }} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">Hat</p>
              <select value={hat} onChange={(e) => setHat(e.target.value)} className="border rounded-md px-2 py-1 text-sm">
                {hats.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
              <div className="mt-3">
                <Button size="sm">Save</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Connect to Supabase to persist avatar settings.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardContent className="p-5">
          <p className="font-bold">Profile</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3 text-sm">
            <label className="grid">
              <span className="text-muted-foreground">Display name</span>
              <input className="border rounded-md px-2 py-2" placeholder="Coder" />
            </label>
            <label className="grid">
              <span className="text-muted-foreground">Email</span>
              <input className="border rounded-md px-2 py-2" placeholder="you@example.com" />
            </label>
            <label className="grid">
              <span className="text-muted-foreground">Daily reminder</span>
              <select className="border rounded-md px-2 py-2"><option>On</option><option>Off</option></select>
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Logout</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
