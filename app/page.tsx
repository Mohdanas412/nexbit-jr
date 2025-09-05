import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ChatBox from '../components/ChatBox'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChatBox />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
