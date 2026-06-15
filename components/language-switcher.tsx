'use client'

import { useEffect, useRef, useState } from 'react'
import type { Language } from './language-provider'
import { useLanguage } from './language-provider'

const basePath =
  process.env.NODE_ENV === 'production' ? '/Portfolio' : ''

const OPTIONS = [
  {
    language: 'pt' as Language,
    flag: `${basePath}/brazil.png`,
    shortLabel: 'PT',
    label: 'Português',
  },
  {
    language: 'en' as Language,
    flag: `${basePath}/united-kingdom.png`,
    shortLabel: 'EN',
    label: 'English',
  },
]

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentLanguage =
    OPTIONS.find((option) => option.language === language) ?? OPTIONS[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.controls.languageGroup}
        aria-expanded={open}
        className="flex h-9 items-center gap-2 rounded-full border border-border bg-surface/60 px-3 backdrop-blur-xl transition-colors hover:bg-surface/80"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.label}
          className="h-5 w-5 rounded-full object-cover"
        />

        <svg
          className={`h-4 w-4 text-muted-foreground transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute right-0 top-14 z-50
            min-w-[180px]
            overflow-hidden
            rounded-2xl
            border border-border
            bg-background/95
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {OPTIONS.map((option) => {
            const active = option.language === language

            return (
              <button
                key={option.language}
                type="button"
                onClick={() => {
                  setLanguage(option.language)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                  active
                    ? 'bg-accent/15 text-accent'
                    : 'hover:bg-muted'
                }`}
              >
                <img
                  src={option.flag}
                  alt={option.label}
                  className="h-5 w-5 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <span className="font-medium">
                    {option.label}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {option.shortLabel}
                  </span>
                </div>

                {active && (
                  <span className="ml-auto text-accent">
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}