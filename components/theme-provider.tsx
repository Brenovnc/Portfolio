'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Theme = 'gold' | 'light'

const ORDER: Theme[] = ['gold', 'light']

function normalizeTheme(value: string | null): Theme | null {
  if (value === 'gold' || value === 'light') return value
  if (value === 'dark' || value === 'dark2') return 'gold'
  return null
}

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('gold')

  useEffect(() => {
    const stored = normalizeTheme(localStorage.getItem('bv-theme'))
    if (stored) {
      setThemeState(stored)
      document.documentElement.dataset.theme = stored
      localStorage.setItem('bv-theme', stored)
    }
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    document.documentElement.dataset.theme = t
    localStorage.setItem('bv-theme', t)
  }, [])

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length]
      document.documentElement.dataset.theme = next
      localStorage.setItem('bv-theme', next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme deve ser usado dentro de ThemeProvider')
  return ctx
}
