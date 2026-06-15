import type { ReactNode } from 'react'

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

export type Project = {
  title: string
  description: string
  tags: readonly string[]
  visual: ReactNode
}

export const PROJECT_VISUALS: ReactNode[] = [
  <ArchDiagram key="architecture" />,
  <CodeWindow
    key="schema"
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
  />,
  <CodeWindow
    key="auth"
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
  />,
  <CodeWindow
    key="consumer"
    filename="consumer.ts"
    code={`consumer.run({
  eachMessage: async ({ topic, message }) => {
    const event = JSON.parse(message.value)
    await withIdempotency(event.id, async () => {
      await handlers[event.type]?.(event.payload)
    })
  },
})

// retry with exponential backoff
producer.send({ topic: 'dlq', messages })`}
  />,
]
