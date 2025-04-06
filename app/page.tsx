import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CourseDescription } from './components/CourseDescription'
import { CourseContent } from './components/CourseContent'
import { AboutMichal } from './components/AboutMichal'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CourseDescription />
      <CourseContent />
      <AboutMichal />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

