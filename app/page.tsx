import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Vision from "@/components/vision"
import Contact from "@/components/contact"
import FutureSkills from "@/components/future-skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <FutureSkills />
      <Projects />
      <Education />
      <Experience />
      <Vision />
      <Contact />
    </main>
  )
}
