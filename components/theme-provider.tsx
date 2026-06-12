'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Theme = 'dark' | 'dark2' | 'light'

const ORDER: Theme[] = ['dark', 'dark2', 'light']

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('bv-theme') as Theme | null
    if (stored && ORDER.includes(stored)) {
      setThemeState(stored)
      document.documentElement.dataset.theme = stored
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
