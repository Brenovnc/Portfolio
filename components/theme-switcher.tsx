'use client'

import { Moon, Palette, Sun } from 'lucide-react'
import { useTheme, type Theme } from './theme-provider'

const META: Record<
  Theme,
  { label: string; icon: typeof Moon; next: string }
> = {
  dark: { label: 'Dark', icon: Moon, next: 'Dourado' },
  dark2: { label: 'Dourado', icon: Palette, next: 'Light' },
  light: { label: 'Light', icon: Sun, next: 'Dark' },
}

export function ThemeSwitcher() {
  const { theme, setTheme, cycleTheme } = useTheme()
  const Icon = META[theme].icon

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={`Alterar tema. Atual: ${META[theme].label}. Próximo: ${META[theme].next}`}
        className="group flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3.5 py-2 text-xs tracking-wide text-foreground/90 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
      >
        <Icon className="h-4 w-4 text-accent transition-transform group-hover:rotate-12" />
        <span className="hidden font-medium sm:inline">{META[theme].label}</span>
      </button>

      <div
        className="hidden items-center gap-1.5 md:flex"
        role="group"
        aria-label="Selecionar tema"
      >
        {(Object.keys(META) as Theme[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            aria-label={`Tema ${META[t].label}`}
            aria-pressed={theme === t}
            className={`h-2 w-2 rounded-full transition-all ${
              theme === t
                ? 'w-5 bg-accent'
                : 'bg-foreground/25 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
