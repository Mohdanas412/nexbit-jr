export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'AI Tutor', href: '#tutor' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ] as const

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel">
        <nav className="container-max flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-accent-blue via-accent-purple to-accent-neon animate-shimmer bg-[length:200%_200%]"></div>
            <span className="text-white font-bold tracking-tight">Nexbit <span className="text-accent-neon">Junior</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="rounded-full px-4 py-2 bg-accent-blue/90 hover:bg-accent-blue text-white shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5">Start Learning</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
