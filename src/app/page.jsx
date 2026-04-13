import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import RestaurantSection from '@/components/dashboard/RestaurantSection'
import TechStack from '@/components/TechStack'
import Metrics from '@/components/Metrics'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <RestaurantSection />
      <TechStack />
      <Metrics />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
