'use client'

import { Palette, Sun } from 'lucide-react'
import { useLanguage } from './language-provider'
import { useTheme, type Theme } from './theme-provider'

const META: Record<Theme, { icon: typeof Palette }> = {
  gold: { icon: Palette },
  light: { icon: Sun },
}

export function ThemeSwitcher() {
  const { theme, cycleTheme } = useTheme()
  const { t } = useLanguage()

  const labels: Record<Theme, string> = {
    gold: t.controls.themeGold,
    light: t.controls.themeLight,
  }
  const nextTheme: Record<Theme, Theme> = {
    gold: 'light',
    light: 'gold',
  }
  const Icon = META[theme].icon

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`${t.controls.themeGroup}. ${labels[theme]} -> ${
        labels[nextTheme[theme]]
      }`}
      className="group inline-flex h-9 items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3.5 text-xs font-semibold text-foreground/90 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
    >
      <Icon
        className="h-4 w-4 text-accent transition-transform group-hover:rotate-12"
        strokeWidth={1.75}
      />
      <span>{labels[theme]}</span>
    </button>
  )
}
