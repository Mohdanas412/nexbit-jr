const KEY = "nexbitjr_sfx";

export function isSfxEnabled(): boolean {
  const v = localStorage.getItem(KEY);
  return v === null ? true : v === "1";
}

export function setSfxEnabled(on: boolean) {
  localStorage.setItem(KEY, on ? "1" : "0");
}

export async function playChime(type: "confetti" | "rank" | "click" = "click") {
  if (!isSfxEnabled()) return;
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  const base = type === "rank" ? 660 : type === "confetti" ? 520 : 440;
  o.frequency.setValueAtTime(base, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(base / 2, ctx.currentTime + 0.15);
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  setTimeout(() => {
    o.stop();
    ctx.close();
  }, 280);
}
