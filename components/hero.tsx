import { ArrowRight, Download } from 'lucide-react'
import { Typewriter } from './typewriter'
import { PortalWireframe } from './portal-wireframe'
import { ProfilePortrait } from './profile-portrait'

const TAGS = ['Python', 'Node.js', 'Database', 'Cloud']

// Escolha o modelo visual do hero: 'cube' (cubo wireframe animado) ou 'portrait' (foto circular)
const HERO_VISUAL: 'cube' | 'portrait' = 'cube'

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6"
    >
      <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-eyebrow">
            Desenvolvedor Backend
          </p>

          <h1 className="font-heading text-6xl font-medium leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl lg:text-8xl">
            Breno Vieira
          </h1>

          <p className="mt-6 flex min-h-[3.5rem] max-w-xl items-start text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Typewriter
              text="Desenvolvedor Backend e Engenheiro de Software"
              pauseAfterTyping={4500}
              deletingSpeed={18}
            />
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs tracking-wide text-foreground/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground ring-1 ring-border-strong transition-all hover:brightness-110"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Baixar CV
              <Download className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-12 font-heading text-lg italic text-muted-foreground">
            Projetos, universo e código movem ideias.
          </p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
        {HERO_VISUAL === 'portrait' ? <ProfilePortrait /> : <PortalWireframe />}
      </div>
    </section>
  )
}
