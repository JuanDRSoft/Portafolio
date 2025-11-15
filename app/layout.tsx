import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Juan Diego Rios Saenz | Software Developer',
  description:
    'Especializado en desarrollo web, aplicaciones modernas y soluciones a la medida de tus necesidades.',
  keywords: [
    'desarrollador',
    'full stack',
    'react',
    'next.js',
    'node.js',
    'portafolio',
    'juan diego rios saenz'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
