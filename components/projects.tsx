'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { type Project, PROJECTS } from './projects-data'

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full rounded-2xl border border-border bg-card p-5 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-6">
      {project.visual}
      <h3 className="mt-6 font-heading text-2xl font-medium text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-surface/40 px-2.5 py-1 text-[11px] tracking-wide text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(PROJECTS.length > 1)

  const getCardMetrics = (track: HTMLDivElement) => {
    const firstCard = track.children[0] as HTMLElement | undefined
    const firstOffset = firstCard?.offsetLeft ?? 0

    return Array.from(track.children).map((child) => {
      const card = child as HTMLElement
      const start = Math.max(0, card.offsetLeft - firstOffset)

      return {
        start,
        end: start + card.offsetWidth,
      }
    })
  }

  const getScrollPoints = (track: HTMLDivElement) => {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)
    const points = getCardMetrics(track).map((card) =>
      Math.min(card.start, maxScroll),
    )

    return [...new Set(points)]
  }

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, PROJECTS.length - 1))
    const card = getCardMetrics(track)[clamped]
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)

    track.scrollTo({
      left: Math.min(card?.start ?? 0, maxScroll),
      behavior: 'smooth',
    })
  }

  const scrollByDirection = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return

    const points = getScrollPoints(track)
    const current = track.scrollLeft
    const currentIndex = points.reduce((nearest, point, index) => {
      return Math.abs(point - current) < Math.abs(points[nearest] - current)
        ? index
        : nearest
    }, 0)
    const nextIndex = Math.max(
      0,
      Math.min(currentIndex + direction, points.length - 1),
    )

    track.scrollTo({
      left: points[nextIndex],
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateCarouselState = () => {
      const cards = getCardMetrics(track)
      const points = getScrollPoints(track)
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)
      const atStart = track.scrollLeft <= 2
      const atEnd = track.scrollLeft >= maxScroll - 2
      const current = track.scrollLeft
      const nearest = points.reduce((closest, point, index) => {
        return Math.abs(point - current) < Math.abs(points[closest] - current)
          ? index
          : closest
      }, 0)
      const viewStart = points[nearest] ?? 0
      const viewEnd = viewStart + track.clientWidth

      setCanScrollPrev(!atStart)
      setCanScrollNext(!atEnd)
      setActive(nearest)

      let nextVisibleCount = 0
      for (let i = nearest; i < cards.length; i += 1) {
        if (cards[i].start > viewEnd + 2) break
        if (cards[i].end <= viewEnd + 2) {
          nextVisibleCount += 1
        }
      }
      setVisibleCount(Math.max(1, nextVisibleCount))
    }

    updateCarouselState()
    track.addEventListener('scroll', updateCarouselState, { passive: true })
    window.addEventListener('resize', updateCarouselState)

    return () => {
      track.removeEventListener('scroll', updateCarouselState)
      window.removeEventListener('resize', updateCarouselState)
    }
  }, [])

  return (
    <section id="projects" className="mx-auto mt-32 max-w-6xl px-5 sm:px-8">
      <SectionHeading tag="Sobre mim" title="Projects" />

      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => scrollByDirection(-1)}
          disabled={!canScrollPrev}
          aria-label="Projeto anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface/40 text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border-strong disabled:hover:text-foreground sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={trackRef}
          className="flex min-w-0 snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="w-[88%] flex-none snap-start sm:w-[calc(50%-0.75rem)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByDirection(1)}
          disabled={!canScrollNext}
          aria-label="Proximo projeto"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface/40 text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border-strong disabled:hover:text-foreground sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-2 flex justify-center">
        <div
          className="relative flex gap-2"
          style={{
            ['--dot-size' as string]: '0.5rem',
            ['--dot-gap' as string]: '0.5rem',
          }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 h-2 rounded-full bg-accent transition-all"
            style={{
              left: `calc(${active} * (var(--dot-size) + var(--dot-gap)))`,
              width: `calc(${visibleCount} * var(--dot-size) + ${
                visibleCount - 1
              } * var(--dot-gap))`,
            }}
          />
          {PROJECTS.map((project, i) => {
            const isVisible =
              i >= active && i < Math.min(active + visibleCount, PROJECTS.length)

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para ${project.title}`}
                aria-current={isVisible ? 'true' : undefined}
                className={`relative z-10 h-2 w-2 rounded-full transition-colors ${
                  isVisible ? 'bg-transparent' : 'bg-border-strong hover:bg-accent/60'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
