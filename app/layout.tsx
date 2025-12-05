import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Winter Festival 2024 - Magical Winter Celebration',
  description: 'Join us for the most enchanting winter festival featuring fortune telling, storytelling, hot cocoa, and magical winter activities. Experience the wonder of winter!',
  keywords: 'winter festival, winter celebration, fortune telling, storytelling, hot cocoa, winter activities, family events',
  authors: [{ name: 'Winter Festival Team' }],
  openGraph: {
    title: 'Winter Festival 2024 - Magical Winter Celebration',
    description: 'Join us for the most enchanting winter festival featuring fortune telling, storytelling, hot cocoa, and magical winter activities.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Winter Festival 2024',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter Festival 2024',
    description: 'Join us for the most enchanting winter festival!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
