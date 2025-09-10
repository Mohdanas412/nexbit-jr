// Placeholder API layer to be wired to Supabase and OpenAI later
export type UserProfile = {
  id: string;
  displayName: string;
  avatarUrl?: string;
  xp: number;
  level: number;
  streak: number;
};

export async function fakeSignUp() {
  await delay(600);
  return { ok: true } as const;
}

export async function fakeLogIn() {
  await delay(400);
  return { ok: true } as const;
}

export async function fakeChat(message: string, onToken: (t: string) => void) {
  // Simulate streaming tokens
  const reply = "Great question! Let's break it down step by step.";
  for (const ch of reply.split(" ")) {
    await delay(90);
    onToken(ch + " ");
  }
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
