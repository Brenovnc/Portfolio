'use client'

import { useEffect, useState } from 'react'

export function Typewriter({
  text,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseAfterTyping = 1800,
  pauseAfterDeleting = 600,
}: {
  text: string
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseAfterTyping?: number
  pauseAfterDeleting?: number
}) {
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && count === text.length) {
      timeout = setTimeout(() => setDeleting(true), pauseAfterTyping)
    } else if (deleting && count === 0) {
      timeout = setTimeout(() => setDeleting(false), pauseAfterDeleting)
    } else {
      timeout = setTimeout(
        () => setCount((c) => c + (deleting ? -1 : 1)),
        deleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [
    count,
    deleting,
    text.length,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ])

  return (
    <span className={className}>
      <span aria-live="polite">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className="animate-caret ml-0.5 inline-block text-accent"
      >
        _
      </span>
    </span>
  )
}
