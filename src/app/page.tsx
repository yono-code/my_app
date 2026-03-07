import { Hero } from "@/components/sections/Hero"
import { Philosophy } from "@/components/sections/Philosophy"
import { Competencies } from "@/components/sections/Competencies"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <Competencies />
      <Projects />
      <Skills />
    </main>
  )
}
