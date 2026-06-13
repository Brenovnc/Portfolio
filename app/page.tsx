import { About } from '@/components/about'
import { BackgroundFx } from '@/components/background-fx'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { ThemeProvider } from '@/components/theme-provider'

export default function Page() {
  return (
    <ThemeProvider>
      <BackgroundFx />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
