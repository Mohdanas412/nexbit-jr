import { useState } from "react";
import Mascot from "@/components/Mascot";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/animations/Confetti";
import { playChime } from "@/lib/sfx";

const blocks = [
  'print("Hello")',
  "name = input()",
  "if name:",
  "  print(name)",
];

export default function LearningPage() {
  const [chat, setChat] = useState([
    {
      role: "assistant",
      text: "Hi! Need a hint? Try arranging the blocks to print a name.",
    },
  ]);
  const [lessonDone, setLessonDone] = useState(false);
  const [arr, setArr] = useState<string[]>([]);

  function onDrop(e: React.DragEvent) {
    const t = e.dataTransfer.getData("text");
    if (!arr.includes(t)) setArr([...arr, t]);
  }

  function check() {
    const target = ["name = input()", "if name:", "  print(name)"];
    const ok = JSON.stringify(arr) === JSON.stringify(target);
    setChat([
      ...chat,
      {
        role: "assistant",
        text: ok
          ? "Great job!"
          : "Almost there—remember to get input before printing.",
      },
    ]);
    setLessonDone(ok);
    playChime(ok ? "confetti" : "buzz");
  }

  return (
    <section className="container py-8 grid lg:grid-cols-2 gap-6">
      <Confetti show={lessonDone} onDone={() => setLessonDone(false)} />
      <div className="space-y-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Mascot
                className="w-12 h-12"
                mood={lessonDone ? "cheer" : "idle"}
              />
              <p className="font-bold">AI Tutor</p>
            </div>
            <div className="mt-3 space-y-2 max-h-[320px] overflow-auto">
              {chat.map((m, i) => (
                <div key={i} className="rounded-lg p-3 bg-muted text-sm">
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setChat([
                    ...chat,
                    {
                      role: "assistant",
                      text: "Hint: Start by reading the user's name.",
                    },
                  ])
                }
              >
                Hint
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  setChat([
                    ...chat,
                    { role: "assistant", text: "Great thinking!" },
                  ])
                }
              >
                Ask
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="font-bold">Micro-lesson: Order the blocks</p>
            <p className="text-sm text-muted-foreground">
              Drag code blocks into the correct order to read a name and print
              it.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-3 bg-accent/10">
                <p className="text-xs font-semibold mb-2">Blocks</p>
                <div className="space-y-2">
                  {blocks.map((b) => (
                    <div
                      key={b}
                      className="cursor-grab rounded-lg bg-card border p-2 text-sm hover:shadow-md"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData("text", b)}
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-xl p-3 bg-accent/10 min-h-[180px]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
              >
                <p className="text-xs font-semibold mb-2">Arrange here</p>
                <div className="space-y-2 min-h-[140px]">
                  {arr.map((b, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-card border p-2 text-sm"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button onClick={check}>Check Answer</Button>
              <Button variant="outline" onClick={() => setArr([])}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
