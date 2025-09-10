import React, { useEffect, useState } from "react";

function rand(min: number, max: number) { return Math.random() * (max - min) + min; }

export default function Confetti({ show, onDone }: { show: boolean; onDone?: () => void }) {
  const [pieces, setPieces] = useState<{ id: number; left: number; delay: number; rotate: number; color: string }[]>([]);

  useEffect(() => {
    if (!show) return;
    const colors = ["#22c55e", "#0ea5e9", "#f59e0b", "#ef4444", "#a78bfa", "#f97316"]; 
    const pcs = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: rand(5, 95),
      delay: rand(0, 300),
      rotate: rand(-40, 40),
      color: colors[Math.floor(rand(0, colors.length))],
    }));
    setPieces(pcs);
    const t = setTimeout(() => { onDone?.(); }, 2500);
    return () => clearTimeout(t);
  }, [show, onDone]);

  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute w-2 h-3 rounded-sm"
          style={{
            left: `${p.left}%`, top: `-10%`, background: p.color, transform: `rotate(${p.rotate}deg)`,
            animation: `confetti-fall 1000ms ${p.delay}ms ease-out forwards, confetti-drift 1200ms ${p.delay}ms ease-in-out`,
          }}
        />
      ))}
      <style>{`@keyframes confetti-fall{to{transform: translateY(120vh) rotate(360deg)}}@keyframes confetti-drift{50%{transform: translateX(10px)} to{transform: translateX(-10px)}}`}</style>
    </div>
  );
}
