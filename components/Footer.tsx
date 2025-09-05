export default function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#contact' },
  ] as const

  const socials = [
    { name: 'Twitter', href: 'https://twitter.com', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M22 5.9c-.7.3-1.5.6-2.2.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A3.7 3.7 0 0 0 12 7.7c0 .3 0 .6.1.9A10.5 10.5 0 0 1 3.1 5c-.4.6-.6 1.2-.6 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.4 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 0 1 2 18c1.7 1.1 3.7 1.7 5.9 1.7 7.1 0 11-6 11-11.2v-.5c.8-.6 1.4-1.3 1.9-2.1z"/></svg>
    ) },
    { name: 'LinkedIn', href: 'https://linkedin.com', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M6.9 6.5A2.4 2.4 0 1 1 2 6.5a2.4 2.4 0 0 1 4.9 0zM2.4 8.9H7v12.6H2.4zM9.3 8.9h4.4v1.7c.6-1 1.8-2 3.7-2 3.9 0 4.6 2.5 4.6 5.8v7.1h-4.6v-6.3c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4v6.4H9.3z"/></svg>
    ) },
    { name: 'GitHub', href: 'https://github.com', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.2-1.4-1.2-1.4C4 14.5 5 14.6 5 14.6c1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.2 3 .9.1-.6.4-1.1.7-1.4-2.3-.3-4.6-1.2-4.6-5.2 0-1.1.4-2 1-2.7 0-.2-.4-1.2.1-2.5 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 4-2.3 4.9-4.6 5.2.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" clipRule="evenodd"/></svg>
    ) },
  ] as const

  return (
    <footer id="contact" className="section-padding border-t border-white/10 bg-black/40">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-accent-blue via-accent-purple to-accent-neon"></div>
              <span className="text-white font-bold tracking-tight">Nexbit <span className="text-accent-neon">Junior</span></span>
            </div>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">Learn coding the smart way with an AI mentor that adapts to you.</p>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              {links.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-accent-blue transition-colors">{l.label}</a></li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent-neon transition-colors" aria-label={s.name}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-500">© {new Date().getFullYear()} Nexbit Junior. All rights reserved.</div>
      </div>
    </footer>
  )
}
