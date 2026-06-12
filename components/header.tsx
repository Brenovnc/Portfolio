'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

const NAV = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between rounded-full border border-border bg-surface/60 px-5 py-2.5 backdrop-blur-xl">
          <a
            href="#home"
            className="font-heading text-xl font-semibold tracking-wide text-foreground"
          >
            BV
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <button
              type="button"
              className="md:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-surface/80 p-3 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
