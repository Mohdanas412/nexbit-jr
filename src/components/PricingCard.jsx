import React from 'react'

export default function PricingCard({ name, price, features, highlighted }) {
  return (
    <div className={
      'relative rounded-2xl p-6 glass-panel hover:-translate-y-1 transition-transform duration-300 ' +
      (highlighted ? 'border-accent-neon/50 shadow-neon' : '')
    }>
      {highlighted && <div className="absolute -top-3 right-4 rounded-full bg-accent-neon px-3 py-1 text-xs font-semibold text-black shadow-neon">Recommended</div>}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-white">{price}</span>
        <span className="text-sm text-gray-400">/mo</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-accent-neon"></span>{f}</li>
        ))}
      </ul>
      <a href="#contact" className={
        'mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ' +
        (highlighted ? 'bg-accent-neon text-black shadow-neon' : 'border border-white/15 text-white hover:border-accent-blue/50 hover:text-accent-blue')
      }>Get Started</a>
    </div>
  )
}
