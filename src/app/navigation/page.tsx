'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Navigation items - fixed to use proper routing
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always Visible */}
          <Link 
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Miles Herrman
          </Link>

          {/* Desktop Navigation - Hidden on smaller screens */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors
                  ${pathname === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900
                     dark:text-gray-300 dark:hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
                }`}
              />
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Solid background with shadow */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 z-40 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="container-wrapper py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 
                ${pathname === item.href
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                } active:scale-95`}
            >
              {item.name}
            </Link>
          ))}
          
          <Link
            href="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-all duration-200 active:scale-95"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}