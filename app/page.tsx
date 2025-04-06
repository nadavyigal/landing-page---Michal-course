import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CourseDescription } from './components/CourseDescription'
import { AboutMichal } from './components/AboutMichal'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3e8d8]">
      <Header />
      <Hero />
      <CourseDescription />
      <AboutMichal />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}

