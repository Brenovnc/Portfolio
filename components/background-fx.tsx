// Constellation stars (used for the subtle linked figure near the top)
const STARS = [
  { x: 8, y: 18, r: 1.4 },
  { x: 20, y: 32, r: 1 },
  { x: 28, y: 24, r: 2 },
  { x: 35, y: 40, r: 1.2 },
  { x: 44, y: 30, r: 1.6 },
  { x: 52, y: 44, r: 1 },
  { x: 60, y: 28, r: 2.2 },
  { x: 68, y: 38, r: 1.2 },
  { x: 16, y: 52, r: 1 },
  { x: 24, y: 60, r: 1.4 },
  { x: 40, y: 56, r: 1.1 },
  { x: 50, y: 64, r: 1.6 },
]

// thin connecting lines for a subtle constellation
const LINES = [
  [0, 2],
  [2, 4],
  [4, 6],
  [6, 7],
  [2, 3],
  [3, 5],
  [8, 9],
  [9, 10],
  [10, 11],
]

// Deterministic scattered starfield (avoids hydration mismatch)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}
const FIELD = Array.from({ length: 80 }).map((_, i) => ({
  x: seededRandom(i * 1.3 + 1) * 100,
  y: seededRandom(i * 2.7 + 4) * 100,
  r: seededRandom(i * 3.1 + 2) * 1.1 + 0.2,
  delay: seededRandom(i * 5.9 + 3) * 5,
  dur: 3 + seededRandom(i * 7.3 + 6) * 4,
}))

const SHOOTERS = [
  { top: '12%', left: '4%', delay: '0s', duration: '6s' },
  { top: '26%', left: '38%', delay: '3.2s', duration: '8s' },
  { top: '8%', left: '64%', delay: '5.5s', duration: '7s' },
]

export function BackgroundFx() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* soft diffuse light gradients */}
      <div
        className="absolute -left-[10%] -top-[15%] h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--glow-1), transparent 70%)',
        }}
      />
      <div
        className="absolute right-[-5%] top-[10%] h-[55vh] w-[55vh] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--glow-3), transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[55vh] w-[70vh] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--glow-2), transparent 70%)',
        }}
      />

      {/* scattered twinkling starfield across the whole page */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {FIELD.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.12}
            fill="var(--star)"
            className="animate-twinkle"
            style={{
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
      </svg>

      {/* shooting stars */}
      {SHOOTERS.map((s, i) => (
        <span
          key={i}
          className="animate-shoot absolute h-px w-24 rounded-full"
          style={{
            top: s.top,
            left: s.left,
            background:
              'linear-gradient(90deg, transparent, var(--star), transparent)',
            // @ts-expect-error custom props
            '--shoot-delay': s.delay,
            '--shoot-duration': s.duration,
          }}
        />
      ))}

      {/* faint constellation, upper portion only */}
      <svg
        className="absolute inset-x-0 top-0 h-[80vh] w-full opacity-60"
        viewBox="0 0 100 80"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="var(--star)" strokeWidth="0.07" opacity="0.35">
          {LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={STARS[a].x}
              y1={STARS[a].y}
              x2={STARS[b].x}
              y2={STARS[b].y}
            />
          ))}
        </g>
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.18}
            fill="var(--star)"
            className="animate-twinkle"
            style={{ animationDelay: `${(i % 5) * 0.7}s` }}
          />
        ))}
      </svg>

      {/* very subtle grain/vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, transparent 40%, color-mix(in srgb, var(--background) 60%, transparent) 100%)',
        }}
      />
    </div>
  )
}
