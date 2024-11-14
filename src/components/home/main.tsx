import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container-wrapper">
        <div className="relative z-10 max-w-2xl py-24 sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Full-Stack Developer
            <span className="text-primary-600 dark:text-primary-400">.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Building modern web applications with React, Next.js, and Node.js.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30" />
      </div>
    </div>
  )
}