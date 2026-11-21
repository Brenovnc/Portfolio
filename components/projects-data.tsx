import { BASE_PATH } from '@/lib/base-path'
import type { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- mantido para uso futuro
function ArchDiagram() {
  const box =
    'flex items-center justify-center rounded-md border border-border-strong bg-surface/60 px-2 py-2 text-center text-[10px] leading-tight text-foreground/80'

  return (
    <div className="rounded-xl border border-border bg-surface/30 p-5">
      <div className="grid grid-cols-3 gap-3 text-[10px]">
        <div className={box}>API Gateway</div>
        <div className={box}>Load Balancer</div>
        <div />
        <div className={box}>
          User Service
          <br />
          Node.js
        </div>
        <div />
        <div className={box}>
          Product Service
          <br />
          Python
        </div>
        <div />
        <div className={box}>
          Auth Service
          <br />
          Database
        </div>
        <div />
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- mantido para uso futuro
function CodeWindow({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0c1018]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[11px] text-white/50">
          {filename}
        </span>
      </div>
      <pre className="h-[176px] overflow-auto px-4 py-3 font-mono text-[11px] leading-relaxed text-white/70">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export type Project = {
  title: string
  description: string
  tags: readonly string[]
  site: string
  repo: string
  visual: ReactNode
}

function ProjectShot({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/30">
      <img
        src={`${BASE_PATH}${src}`}
        alt=""
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  )
}

// Um visual por projeto, na mesma ordem de COPY.*.projects.items.
// ArchDiagram e CodeWindow ficam disponíveis para projetos sem print.
export const PROJECT_VISUALS: ReactNode[] = [
  <ProjectShot
    key="pere"
    src="/images/projects/pere.png"
  />,
  <ProjectShot
    key="orbis"
    src="/images/projects/orbis.png"
  />,
]
