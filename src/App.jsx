import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer id="contact" />
    </div>
  )
}
