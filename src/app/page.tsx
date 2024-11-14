import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
// import Projects from '@/components/home/Projects'
// import About from '@/components/home/About'
// import Contact from '@/components/home/Contact'
// import Navigation from '@/components/layout/Navigation'
// import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Navigation /> */}
      
      <Hero />
      
      <section id="projects" className="section-padding">
        <div className="container-wrapper">
          {/* <Projects /> */}
        </div>
      </section>
      
      <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-wrapper">
          {/* <About /> */}
        </div>
      </section>
      
      <section id="contact" className="section-padding">
        <div className="container-wrapper">
          {/* <Contact /> */}
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}