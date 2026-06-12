import { Code2, Database, LayoutPanelLeft, Wrench } from 'lucide-react'

type Area = {
  Icon: typeof Code2
  title: string
  items: string[]
}

const AREAS: Area[] = [
  {
    Icon: LayoutPanelLeft,
    title: 'Front-end',
    items: ['React1', 'React2', 'React3', 'React4', 'HTML/CSS'],
  },
  {
    Icon: Code2,
    title: 'Back-end',
    items: ['Python1', 'Python2', 'Python3', 'Python4'],
  },
  {
    Icon: Database,
    title: 'Banco de Dados',
    items: ['PostgreSQL1', 'PostgreSQL2', 'PostgreSQL3'],
  },
  {
    Icon: Wrench,
    title: 'Outras Tecnologias',
    items: ['Git/GitHub1', 'Git/GitHub2', 'Git/GitHub3'],
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

export function Skills() {
  return (
    <section id="skills" className="mx-auto mt-32 max-w-6xl px-5 sm:px-8">
      <SectionHeading tag="Tecnologias" title="Minhas habilidades" />

      <div className="grid gap-6 md:grid-cols-2">
        {AREAS.map(({ Icon, title, items }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {title}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface/40 px-3.5 py-1.5 text-sm text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
