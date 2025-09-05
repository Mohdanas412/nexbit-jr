type Props = { icon: React.ReactNode; title: string; description: string }

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="group relative rounded-2xl glass-panel p-6 hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-neon/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  )
}
