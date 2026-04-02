import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  title: 'Nataly Martinez Gallardo | Ingeniera Naval & Desarrolladora',
  description: 'Portfolio de Nataly Martinez Gallardo - Ingeniera Naval integrando desarrollo de software con Python y Django para transformar la industria naval.',
  generator: 'v0.app',
  keywords: ['Ingeniera Naval', 'Python', 'Django', 'Desarrollo Web', 'Automatización', 'Industria Naval'],
  authors: [{ name: 'Nataly Martinez Gallardo' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${sora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
