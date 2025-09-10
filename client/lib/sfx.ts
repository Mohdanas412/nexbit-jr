const KEY = "nexbitjr_sfx";

export function isSfxEnabled(): boolean {
  const v = localStorage.getItem(KEY);
  return v === null ? true : v === "1";
}

export function setSfxEnabled(on: boolean) {
  localStorage.setItem(KEY, on ? "1" : "0");
}

export async function playChime(
  type: "confetti" | "rank" | "click" | "pop" | "buzz" | "whoosh" | "sparkle" = "click",
) {
  if (!isSfxEnabled()) return;
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  const l = ctx.createBiquadFilter();
  l.type = "lowpass";
  o.connect(g);
  g.connect(l);
  l.connect(ctx.destination);

  let base = 440;
  let dur = 0.25;
  let typeWave: OscillatorType = "sine";

  switch (type) {
    case "confetti": base = 520; dur = 0.28; typeWave = "triangle"; break;
    case "rank": base = 660; dur = 0.35; typeWave = "sine"; break;
    case "pop": base = 700; dur = 0.12; typeWave = "square"; break;
    case "buzz": base = 160; dur = 0.25; typeWave = "sawtooth"; break;
    case "whoosh": base = 300; dur = 0.4; typeWave = "sine"; break;
    case "sparkle": base = 900; dur = 0.15; typeWave = "triangle"; break;
    default: base = 440; dur = 0.12; typeWave = "sine";
  }

  o.type = typeWave;
  o.frequency.setValueAtTime(base, ctx.currentTime);
  if (type === "buzz") {
    o.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + dur);
  } else if (type === "whoosh") {
    o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + dur);
  } else {
    o.frequency.exponentialRampToValueAtTime(base / 2, ctx.currentTime + dur);
  }

  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur + 0.05);

  o.start();
  setTimeout(() => { o.stop(); ctx.close(); }, (dur + 0.1) * 1000);
}
