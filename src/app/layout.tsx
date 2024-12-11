import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/app/navigation/page'
import Footer from '@/app/footer/page'
import AnimatedBackground from '@/components/background';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <AnimatedBackground 
        count={60} 
        gradientFrom="blue-50" 
        gradientTo="blue-300" 
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Initialize the Inter font
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miles Herrman Portfolio',
  description: 'Full-stack developer portfolio',
}
