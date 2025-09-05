'use client'
import { useEffect, useState } from 'react'

const items = [
  { name: 'Aisha Khan', role: 'Student', quote: 'Nexbit Junior made coding finally click for me. The AI tutor is super friendly and helpful!', avatarColor: 'from-accent-blue to-accent-purple' },
  { name: 'Leo Martinez', role: 'New Dev', quote: 'Daily challenges kept me consistent. I built my first app in a week!', avatarColor: 'from-accent-neon to-accent-blue' },
  { name: 'Mina Park', role: 'Designer', quote: "I was intimidated by code. Now I'm confident with the basics and beyond.", avatarColor: 'from-accent-purple to-accent-blue' },
  { name: 'Sam Patel', role: 'High Schooler', quote: 'The progress tracking is so motivating. I love seeing my streak grow.', avatarColor: 'from-accent-blue to-accent-neon' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by beginners everywhere</h2>
          <p className="mt-2 text-gray-300">Real stories from learners who started their journey with Nexbit Junior.</p>
        </div>
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
              {items.map((t, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="mx-auto max-w-3xl rounded-2xl glass-panel p-8">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${t.avatarColor}`}></div>
                      <div>
                        <div className="text-white font-semibold">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.role}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-lg text-gray-200">“{t.quote}”</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, i) => (
              <button key={i} aria-label={`Go to testimonial ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-accent-neon' : 'bg-white/20'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
