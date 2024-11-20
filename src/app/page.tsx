"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Laptop, Brain, Mail, Github, Linkedin, Terminal } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y }: { icon: any, delay: number, x: number, y: number }) => (
  <div 
    className="absolute hidden md:flex items-center justify-center w-10 h-10 text-primary-500/50 dark:text-primary-400/50"
    style={{
      animation: `float 6s ease-in-out infinite ${delay}s, fadeIn 1s ease-in-out ${delay}s forwards`,
      left: `${x}%`,
      top: `${y}%`,
    }}
  >
    <Icon size={24} />
  </div>
);

const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default function Main() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / globalThis.innerWidth - 0.5) * 20;
      const y = (e.clientY / globalThis.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
  
    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => globalThis.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />
      </div>

      {/* Floating technology icons */}
      <FloatingIcon icon={Code} delay={0} x={75} y={20} />
      <FloatingIcon icon={Laptop} delay={0.2} x={85} y={40} />
      <FloatingIcon icon={Brain} delay={0.4} x={80} y={60} />
      <FloatingIcon icon={Terminal} delay={0.6} x={70} y={80} />

      <div className="container-wrapper relative z-10">
        <div 
          className={`max-w-3xl py-32 md:py-40 transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
        >
          {/* Name with animated gradient */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span
              className={`bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-300 dark:to-secondary-300 
                          bg-clip-text text-transparent animate-gradient-x`}
              style={{
                animationDuration: '6s', // Slower animation
                backgroundSize: '200%',  // Smooth transition
              }}
            >
              Miles Herrman
            </span>
            <span className="text-primary-500 dark:text-primary-300 animate-pulse" style={{ animationDuration: '2s' }}>
              .
            </span>
          </h1>



          {/* Animated typing effect */}
          <div className="h-16 md:h-20">
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold">
              <TypingText text="Software Engineer & Full Stack Developer" />
            </h2>
          </div>

          {/* Description with fade-in effect */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 opacity-0 animate-fadeIn">
            Building modern web applications with React, Next.js, and Node.js.
            Passionate about creating elegant solutions to complex problems.
          </p>

          {/* Interactive buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group relative inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Contact Me
              <div className="absolute inset-0 rounded-lg bg-primary-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-12 flex gap-6">
            <a
              href="https://github.com/milesherrman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/milesherrman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Add some style definitions */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}