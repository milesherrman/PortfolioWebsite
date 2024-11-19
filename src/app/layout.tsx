import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/navigation/page'
import Footer from '@/app/footer/page'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miles Herrman Portfolio',
  description: 'Full-stack developer portfolio',
}
