import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'Nexbit Junior – AI Coding Mentor for Beginners',
  description: 'Nexbit Junior helps beginners learn coding with AI-powered daily guidance, gamified challenges, and progress tracking.',
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} min-h-full bg-[#0a0a0a] text-gray-200`}>
        {children}
      </body>
    </html>
  )
}
