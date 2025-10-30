import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Mascot from "@/components/Mascot";
import { Link } from "react-router-dom";

const weekly = [
  { name: "Aisha", xp: 240 },
  { name: "Leo", xp: 220 },
  { name: "Maya", xp: 210 },
  { name: "You", xp: 198 },
  { name: "Kai", xp: 180 },
];

const allTime = [
  { name: "Aisha", xp: 4020 },
  { name: "You", xp: 3980 },
  { name: "Maya", xp: 3500 },
  { name: "Leo", xp: 3100 },
  { name: "Kai", xp: 2900 },
];

export default function LeaderboardPage() {
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Climb the ranks</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Leaderboard</h1>
        </div>
        <Mascot className="w-16 h-16" mood="cheer" />
      </div>

      <Card className="shadow-md dark:dark-card-glow dark:shadow-none mt-6">
        <CardContent className="p-5">
          <Tabs defaultValue="week">
            <div className="flex items-center justify-between mb-3">
              <TabsList>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="all">All Time</TabsTrigger>
              </TabsList>
              <Button asChild size="sm" variant="outline"><Link to="/dashboard">Back to dashboard</Link></Button>
            </div>
            <TabsContent value="week">
              <LeaderboardTable data={weekly} you="You" />
            </TabsContent>
            <TabsContent value="all">
              <LeaderboardTable data={allTime} you="You" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

function LeaderboardTable({ data, you }: { data: { name: string; xp: number }[]; you: string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">XP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((r, i) => (
          <TableRow key={r.name} className={r.name === you ? "bg-primary/10" : undefined}>
            <TableCell className="font-semibold">#{i + 1}</TableCell>
            <TableCell className="font-semibold">{r.name}{r.name === you ? " (you)" : ""}</TableCell>
            <TableCell className="text-right">{r.xp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
