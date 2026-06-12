import {
  Briefcase,
  Mail,
  MapPin,
  PenTool,
  Rss,
  Sparkles,
  SquareArrowOutUpRight,
  Terminal,
} from 'lucide-react'

const CONTACT = [
  { Icon: Mail, text: 'brenovnc2023@gmail.com' },
  { Icon: MapPin, text: 'Brasil' },
  { Icon: SquareArrowOutUpRight, text: 'Disponível para projetos' },
]

const LINKS = [
  { Icon: Briefcase, text: 'LinkedIn', href: '#' },
  { Icon: Terminal, text: 'GitHub', href: '#' },
  { Icon: PenTool, text: 'Dev.to', href: '#' },
]

const VISIT = [
  { Icon: Rss, text: 'Contact Updates', href: '#' },
  { Icon: Sparkles, text: 'Dev Center', href: '#' },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-32 max-w-6xl px-5 pb-10 sm:px-8"
    >
      <div className="border-t border-border pt-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-heading text-lg text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {CONTACT.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg text-foreground">Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {LINKS.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg text-foreground">Visit</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {VISIT.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end sm:text-right">
            <Sparkles className="h-7 w-7 text-accent" strokeWidth={1.2} />
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              Construído com código,
              <br />
              curiosidade e café.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center font-mono text-xs tracking-wide text-muted-foreground">
          © 2024 Breno Veloso. Construído e feito com carinho.
        </p>
      </div>
    </footer>
  )
}
