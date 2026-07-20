import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Shopifly — Женская одежда',
  description: 'Элегантная женская одежда для современных женщин. Стиль, качество и комфорт в каждой детали.',
  keywords: ['женская одежда', 'мода', 'стиль', 'Shopifly'],
  // icons: {
  //   icon: [
  //     { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
  //     { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
  //     { url: '/icon.svg', type: 'image/svg+xml' },
  //   ],
  //   apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  // },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5ede8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased font-sans">{children}<Analytics /></body>
    </html>
  )
}
