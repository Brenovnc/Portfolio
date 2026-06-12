import type { ReactNode } from 'react'

// ──────────────────────────────────────────────────────────────
//  Visuais reutilizáveis para os cards de projeto
// ──────────────────────────────────────────────────────────────

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

// ──────────────────────────────────────────────────────────────
//  Dados dos projetos — adicione um novo objeto aqui para criar
//  um novo card no carrossel. Nada mais precisa ser alterado.
// ──────────────────────────────────────────────────────────────

export type Project = {
  title: string
  description: string
  tags: string[]
  visual: ReactNode
}

export const PROJECTS: Project[] = [
  {
    title: 'Node.js API',
    description:
      'API RESTful escalável com autenticação, rotas protegidas e integração com banco de dados. Arquitetura orientada a serviços com foco em performance.',
    tags: ['Node.js', 'Express', 'JWT', 'Docker'],
    visual: <ArchDiagram />,
  },
  {
    title: 'Schemas',
    description:
      'Modelagem de dados organizada com Prisma ORM, garantindo consistência, performance e escalabilidade nas relações entre entidades.',
    tags: ['Prisma', 'PostgreSQL', 'Database'],
    visual: (
      <CodeWindow
        filename="schema.prisma"
        code={`model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

model Project {
  id     Int    @id @default(autoincrement())
  title  String
  userId Int
  user   User   @relation(fields: [userId], references: [id])
}`}
      />
    ),
  },
  {
    title: 'Auth Service',
    description:
      'Serviço de autenticação com tokens JWT, refresh tokens e controle de acesso baseado em papéis. Sessões seguras e expiração automática.',
    tags: ['Node.js', 'JWT', 'Redis', 'Security'],
    visual: (
      <CodeWindow
        filename="auth.controller.ts"
        code={`export async function login(req, res) {
  const { email, password } = req.body
  const user = await users.findByEmail(email)
  if (!user || !verify(password, user.hash)) {
    return res.status(401).json({ error: 'Invalid' })
  }
  const token = sign({ sub: user.id }, SECRET, {
    expiresIn: '15m',
  })
  const refresh = await issueRefresh(user.id)
  return res.json({ token, refresh })
}`}
      />
    ),
  },
  {
    title: 'Event Pipeline',
    description:
      'Pipeline de eventos assíncrono com filas e workers, processando milhões de mensagens com idempotência e reprocessamento automático.',
    tags: ['Kafka', 'Workers', 'AWS', 'Queue'],
    visual: (
      <CodeWindow
        filename="consumer.ts"
        code={`consumer.run({
  eachMessage: async ({ topic, message }) => {
    const event = JSON.parse(message.value)
    await withIdempotency(event.id, async () => {
      await handlers[event.type]?.(event.payload)
    })
  },
})

// retry com backoff exponencial
producer.send({ topic: 'dlq', messages })`}
      />
    ),
  },
]
