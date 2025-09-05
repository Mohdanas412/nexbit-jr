'use client'
import { useState } from 'react'

type Message = { role: 'assistant' | 'user'; text: string }

const initialMessages: Message[] = [
  { role: 'assistant', text: "Hi! I'm your AI mentor. What do you want to build today?" },
  { role: 'user', text: 'A simple counter app in JavaScript.' },
  { role: 'assistant', text: "Great! Let's start by creating an HTML button and a display area. Ready?" },
]

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
const next: Message[] = [...messages, { role: "user" as const, text: input.trim() }]
setMessages(next)
setInput('')
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Nice! Tip: keep functions small and focused. Try adding an increment function.' },
      ])
    }, 600)
  }

  return (
    <section id="tutor" className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet your AI Tutor</h2>
          <p className="mt-2 text-gray-300">A friendly, always-available coach that guides you with examples, hints, and encouragement.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-accent-blue/40 via-accent-purple/40 to-accent-neon/40 blur-2xl"></div>
            <div className="relative glass-panel rounded-2xl p-4 md:p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-gray-400">AI Chat</span>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                </div>
              </div>
              <div className="h-72 overflow-y-auto space-y-3 pr-1">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === 'assistant' ? 'flex gap-3' : 'flex gap-3 justify-end'}>
                    {m.role === 'assistant' && (
                      <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple"></div>
                    )}
                    <div className={
                      'max-w-[80%] rounded-xl px-3 py-2 text-sm ' +
                      (m.role === 'assistant' ? 'bg-white/5 text-gray-100' : 'bg-accent-blue/20 text-white border border-accent-blue/30')
                    }>
                      {m.text}
                    </div>
                    {m.role === 'user' && (
                      <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-accent-neon"></div>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={send} className="mt-4 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 rounded-full bg-black/40 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
                <button type="submit" className="rounded-full px-4 py-2 bg-accent-neon text-black font-semibold shadow-neon hover:-translate-y-0.5 transition-transform">Send</button>
              </form>
            </div>
          </div>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-accent-neon/20 flex items-center justify-center border border-accent-neon/40 text-accent-neon">✓</div>
              <div>
                <h3 className="text-white font-semibold">Real-time hints</h3>
                <p className="text-sm">Get unstuck instantly with contextual nudges and short examples that match your code.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-accent-blue/20 flex items-center justify-center border border-accent-blue/40 text-accent-blue">★</div>
              <div>
                <h3 className="text-white font-semibold">Daily challenges</h3>
                <p className="text-sm">Build consistency with bite-sized missions that keep you engaged and improving.</p>
              </div>
            </div>
            <a href="#tutor" className="inline-block mt-6 rounded-full px-5 py-2.5 border border-white/15 text-white hover:border-accent-purple/50 hover:text-accent-purple transition-colors">Try Chat Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
