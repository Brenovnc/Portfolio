'use client'

import Image from 'next/image'

export function ProfilePortrait() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center">
      {/* glow externo suave */}
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--glow-4) 0%, transparent 70%)',
        }}
      />

      {/* anel rotativo luminoso */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] animate-[spin_18s_linear_infinite] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, var(--accent) 90deg, transparent 200deg, var(--accent) 320deg, transparent 360deg)',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 2px))',
        }}
      />

      {/* anel estático fino de contorno */}
      <div
        aria-hidden="true"
        className="absolute inset-[9%] rounded-full ring-2 ring-border-strong"
      />

      {/* foto recortada em círculo */}
      <div className="absolute inset-[12%] overflow-hidden rounded-full ring-1 ring-accent/40 shadow-2xl">
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/images/projects/Perfil01.jpg`}
          alt="Foto de Breno Vieira"
          fill
          sizes="(max-width: 1024px) 80vw, 420px"
          className="object-cover"
            style={{
            filter: 'brightness(0.9) contrast(1.09) saturate(0.85)',
            opacity: 0.95,
          }}
          priority
        />
      </div>
    </div>
  )
}
