export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden section-padding">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-blue/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-purple/25 blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-neon/20 blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            <span className="gradient-text">Learn to Code with AI, Effortlessly.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">Daily personalized coding guidance from your AI mentor. Master fundamentals with bite-sized lessons, challenges, and real-time feedback.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-accent-neon text-black font-semibold shadow-neon transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-neon">Start Free Trial</a>
            <a href="#tutor" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-accent-blue/50 hover:text-accent-blue transition-colors">Watch Demo</a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-gray-400">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent-neon animate-pulse"></span> No credit card</div>
            <div>Beginner-friendly</div>
            <div>Cancel anytime</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-accent-blue/40 via-accent-purple/40 to-accent-neon/40 blur-2xl"></div>
          <div className="relative glass-panel rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between pb-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/70"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/70"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/70"></span>
              </div>
              <span className="text-xs text-gray-400">demo.js</span>
            </div>
            <pre className="text-sm leading-relaxed overflow-auto rounded-xl bg-black/40 p-4 border border-white/10 text-gray-200">
{`function greet(name) {
  return \`Hello, ${'${name}'}!\`
}

const tips = [
  'Use meaningful variable names',
  'Break problems down',
  'Practice daily with small goals',
]

console.log(greet('Nexbit Junior'))`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
