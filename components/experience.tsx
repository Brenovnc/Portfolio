'use client'

import { Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { useLanguage } from './language-provider'

const EXPERIENCE_ICONS = [GraduationCap, Rocket, Briefcase]

function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-16">
      <p className="mb-3 font-mono text-sm text-accent">{`// ${tag}`}</p>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <span className="mt-4 block h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto mt-32 max-w-6xl px-5 sm:px-8">
      <SectionHeading tag={t.experience.tag} title={t.experience.title} />

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 h-full w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-12 md:space-y-0">
          {t.experience.entries.map(({ period, title, org, description }, i) => {
            const Icon = EXPERIENCE_ICONS[i] ?? Briefcase
            const isLeft = i % 2 === 0

            return (
              <li
                key={title}
                className="relative md:grid md:grid-cols-2 md:gap-x-16"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-background shadow-[0_0_18px_-4px_var(--accent)] md:left-1/2 md:-translate-x-1/2"
                >
                  <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                </span>

                <div
                  className={[
                    'ml-12 md:ml-0',
                    isLeft
                      ? 'md:col-start-1 md:pr-4 md:text-right'
                      : 'md:col-start-2 md:pl-4',
                    i > 0 ? 'md:-mt-10' : '',
                  ].join(' ')}
                >
                  <div className="rounded-2xl border border-border bg-card p-5 backdrop-blur-sm transition-colors hover:border-border-strong">
                    <p className="font-mono text-xs tracking-wide text-accent">
                      {period}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
