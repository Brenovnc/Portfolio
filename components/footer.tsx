import { Mail, MapPin } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5l-.01-1.77c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07a9.94 9.94 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.68.74 1.08 1.67 1.08 2.82 0 4.02-2.45 4.9-4.79 5.16.38.33.71.97.71 1.96l-.01 2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const SOCIAL: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  href: string
}[] = [
  {
    Icon: Mail,
    label: 'E-mail',
    href: 'mailto:brenovnc2023@gmail.com',
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/Brenovnc',
  },
  {
    Icon: MapPin,
    label: 'Localização: Brasil',
    href: 'https://www.google.com/maps/place/Brasil',
  },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-32 max-w-6xl px-5 pb-10 sm:px-8"
    >
      <div className="flex flex-col items-center gap-8 border-t border-border pt-12">
        <a
          href="#home"
          className="font-heading text-2xl font-semibold tracking-wide text-foreground"
        >
          BV
        </a>

        <nav aria-label="Contato e redes" className="flex items-center gap-3">
          {SOCIAL.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </a>
          ))}
        </nav>

        <p className="text-center font-mono text-xs tracking-wide text-muted-foreground">
          © 2024 Breno Vieira · Construído com código, curiosidade e café.
        </p>
      </div>
    </footer>
  )
}
