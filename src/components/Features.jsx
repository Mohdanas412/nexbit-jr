import React from 'react'
import FeatureCard from './FeatureCard'

const icons = {
  tutor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-blue">
      <path d="M12 2L3 6.5L12 11L21 6.5L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 17.5L12 22L21 17.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12L12 16.5L21 12" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  game: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-purple">
      <path d="M7 8H9M15 8H17M8 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-neon">
      <path d="M4 20V10M10 20V4M16 20V14M20 20H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  guide: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-blue">
      <path d="M6 4H18V20H6V4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for beginners, powered by AI</h2>
          <p className="mt-2 text-gray-300">From interactive lessons to real-time coaching, Nexbit Junior guides you every step of the way.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={icons.tutor} title="Personalized AI tutor" description="Get tailored explanations, hints, and feedback based on your progress and learning style." />
          <FeatureCard icon={icons.game} title="Gamified challenges" description="Level up with daily missions, streaks, and badges to keep you motivated and consistent." />
          <FeatureCard icon={icons.chart} title="Progress analytics" description="Track your growth with dashboards showing time spent, concepts mastered, and goals completed." />
          <FeatureCard icon={icons.guide} title="Step-by-step guidance" description="Learn by doing with hand-held exercises, code walkthroughs, and best practices." />
        </div>
      </div>
    </section>
  )
}
