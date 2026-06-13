import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Portfólio de Breno Vieira',
  description:
    'Portfólio de Breno Vieira, Desenvolvedor Backend e Engenheiro de Software. Projetos, universo e código movem ideias.',
  icons: {
    icon: [{ url: '/favicon-bv.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon-bv.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#070b14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <div className="bg-texture" aria-hidden="true" />
        <div className="app-content relative z-10">{children}</div>
      </body>
    </html>
  )
}
