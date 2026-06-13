'use client'

import { useEffect, useRef } from 'react'

/* ----------------------------------------------------------------
   Portal Wireframe — cubo/portal 3D em wireframe desenhado via
   <canvas>. Rotaciona suavemente, com nós luminosos nos vértices
   e partículas orbitando ao redor. A cor é lida da variável CSS
   --accent, então acompanha o tema atual automaticamente.
------------------------------------------------------------------*/

type Vec3 = { x: number; y: number; z: number }

// 8 vértices de um cubo centrado na origem
const CUBE: Vec3[] = [
  { x: -1, y: -1, z: -1 },
  { x: 1, y: -1, z: -1 },
  { x: 1, y: 1, z: -1 },
  { x: -1, y: 1, z: -1 },
  { x: -1, y: -1, z: 1 },
  { x: 1, y: -1, z: 1 },
  { x: 1, y: 1, z: 1 },
  { x: -1, y: 1, z: 1 },
]

// Arestas (pares de índices de vértices)
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0], // face traseira
  [4, 5], [5, 6], [6, 7], [7, 4], // face frontal
  [0, 4], [1, 5], [2, 6], [3, 7], // conexões
]

type Particle = {
  radius: number
  angle: number
  speed: number
  tilt: number
  size: number
}

function readAccent(): string {
  if (typeof window === 'undefined') return '#d4af37'
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent')
    .trim()
  return value || '#d4af37'
}

export function PortalWireframe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let accent = readAccent()
    let width = 0
    let height = 0
    let dpr = 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    // Observa troca de tema para atualizar a cor
    const themeObserver = new MutationObserver(() => {
      accent = readAccent()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    // Partículas orbitando
    const particles: Particle[] = Array.from({ length: 42 }, () => ({
      radius: 1.7 + Math.random() * 1.1,
      angle: Math.random() * Math.PI * 2,
      speed: (0.002 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
      tilt: (Math.random() - 0.5) * 1.4,
      size: 0.6 + Math.random() * 1.6,
    }))

    let rotX = -0.35
    let rotY = 0.6
    let frame = 0
    let raf = 0

    const project = (v: Vec3, scale: number) => {
      // rotação em Y
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      let x = v.x * cosY - v.z * sinY
      let z = v.x * sinY + v.z * cosY
      let y = v.y
      // rotação em X
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const y2 = y * cosX - z * sinX
      const z2 = y * sinX + z * cosX
      y = y2
      z = z2
      // perspectiva
      const perspective = 4
      const factor = perspective / (perspective + z)
      return {
        x: width / 2 + x * scale * factor,
        y: height / 2 + y * scale * factor,
        depth: factor,
      }
    }

    const render = () => {
      frame += 1
      if (!reduceMotion) {
        rotY += 0.005
        rotX = -0.35 + Math.sin(frame * 0.004) * 0.18
      }

      ctx.clearRect(0, 0, width, height)

      const scale = Math.min(width, height) * 0.2

      // Glow central pulsante
      const pulse = 0.5 + Math.sin(frame * 0.03) * 0.12
      const glow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        scale * 3,
      )
      glow.addColorStop(0, withAlpha(accent, 0.22 * pulse))
      glow.addColorStop(0.5, withAlpha(accent, 0.06))
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Partículas orbitando
      for (const p of particles) {
        if (!reduceMotion) p.angle += p.speed
        const px = Math.cos(p.angle) * p.radius
        const pz = Math.sin(p.angle) * p.radius
        const py = Math.sin(p.angle * 2 + p.tilt) * p.tilt
        const proj = project({ x: px, y: py, z: pz }, scale)
        const alpha = Math.max(0.1, proj.depth * 0.9)
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, p.size * proj.depth, 0, Math.PI * 2)
        ctx.fillStyle = withAlpha(accent, alpha)
        ctx.shadowBlur = 8
        ctx.shadowColor = accent
        ctx.fill()
      }
      ctx.shadowBlur = 0

      // Projeta vértices
      const points = CUBE.map((v) => project(v, scale))

      // Arestas
      ctx.lineWidth = 1.1
      for (const [a, b] of EDGES) {
        const pa = points[a]
        const pb = points[b]
        const avgDepth = (pa.depth + pb.depth) / 2
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.strokeStyle = withAlpha(accent, 0.25 + avgDepth * 0.5)
        ctx.shadowBlur = 12 * avgDepth
        ctx.shadowColor = accent
        ctx.stroke()
      }
      ctx.shadowBlur = 0

      // Nós luminosos nos vértices
      for (const p of points) {
        const r = 2.2 + p.depth * 2.4
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = withAlpha(accent, 0.6 + p.depth * 0.4)
        ctx.shadowBlur = 16 * p.depth
        ctx.shadowColor = accent
        ctx.fill()
      }
      ctx.shadowBlur = 0

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full"
    />
  )
}

// Converte uma cor (#rrggbb ou rgb()) em rgba com alpha custom
function withAlpha(color: string, alpha: number): string {
  const a = Math.min(1, Math.max(0, alpha))
  if (color.startsWith('#')) {
    let hex = color.slice(1)
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('')
    }
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
  if (color.startsWith('rgb')) {
    const nums = color.match(/[\d.]+/g)
    if (nums && nums.length >= 3) {
      return `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, ${a})`
    }
  }
  return color
}
