import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

type TimelineItem = {
  Icon: typeof GraduationCap
  title: string
  org: string
  period: string
}

const TIMELINE: TimelineItem[] = [
  {
    Icon: GraduationCap,
    title: 'Bacharel em Sistemas de Informação',
    org: 'Universidade Federal de Itajubá (UNIFEI)',
    period: '03/2023 — Previsão 06/2027',
  },
  {
    Icon: GraduationCap,
    title: 'Outra coisa',
    org: 'Organizacao',
    period: '01/2027 — 12/2029',
  },
  {
    Icon: MapPin,
    title: 'Idiomas',
    org: 'Português (Nativo) • Inglês (Intermediário)',
    period: '',
  },
]

function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-sm text-accent">{`// ${tag}`}</p>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <span className="mt-4 block h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto mt-32 max-w-6xl px-5 sm:px-8">
      <SectionHeading tag="Sobre mim" title="Quem sou eu" />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — bio */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Desenvolvedor com foco em{' '}
            <span className="font-medium text-accent">Linguagem 1</span> e{' '}
            <span className="font-medium text-accent">Linguagem 2</span>
            blablablablablabla blablablablabla blablablablabla blablablablabla
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
            ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
            ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm">
            <a
              href="mailto:breno.dev@example.com"
              className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 text-accent" strokeWidth={1.75} />
              brenovnc2023@gmail.com
            </a>
            <span className="inline-flex items-center gap-2 text-foreground/80">
              <Phone className="h-4 w-4 text-accent" strokeWidth={1.75} />
              (00) 00000-0000
            </span>
          </div>
        </div>

        {/* Right — timeline cards */}
        <div className="flex flex-col gap-5">
          {TIMELINE.map(({ Icon, title, org, period }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 backdrop-blur-sm transition-colors hover:border-border-strong"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface/50">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{org}</p>
                {period ? (
                  <p className="mt-2 font-mono text-xs text-accent">{period}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
