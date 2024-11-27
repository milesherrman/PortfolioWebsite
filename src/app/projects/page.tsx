"use client"
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mouse, ChevronDown } from 'lucide-react';

// Rest of your components remain the same...
const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(window.scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hero section with 3D tilt effect
const Hero = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotation({ x: x * 20, y: y * 20 });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="max-w-4xl mx-auto text-center p-8 transition-transform duration-200 ease-out"
        onMouseMove={handleMouseMove}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Name with animated gradient */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span
            className={`bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300 
                        bg-clip-text text-transparent animate-gradient-x`}
            style={{
              animationDuration: '6s', 
              backgroundSize: '150%',  
            }}
          >
            Projects
          </span>
          <span className="text-primary-500 dark:text-primary-300 animate-pulse" style={{ animationDuration: '2s' }}>
            .
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer & Creative Developer
        </p>
        <div className="flex justify-center space-x-4 mt-12 mb-12">
          <Mouse className="animate-bounce" size={38} />
          <ChevronDown className="animate-bounce" size={24} />
        </div>
      </div>
    </div>
  );
};

// Enhanced Project Card
interface Project {
  title: string;
  overview: string;
  technicalDetails: string;
  keyTakeaways: string[];
  futureWork: string;
  technologies: string[];
  githubLink?: string | null;
  liveLink?: string | null;
  imageUrl: string;
}

const ProjectCard: React.FC<Project> = ({
  title,
  overview,
  technicalDetails,
  keyTakeaways,
  futureWork,
  technologies,
  githubLink,
  liveLink,
  imageUrl
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'future'>('overview');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} project screenshot`}
          className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex space-x-2 transition-transform duration-300">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-800/90 transition"
            >
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600/70 text-white p-2 rounded-full hover:bg-primary-600/90 transition"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white bg-gradient-to-r from-primary-500 to-secondary-500 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
          {title}
        </h2>

        <div className="flex space-x-2 mb-6">
          {['overview', 'technical', 'future'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'  // Solid background color for the active tab
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>


        <div className="mb-6 min-h-[200px]">
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-gray-600 dark:text-gray-300">{overview}</p>
              <h3 className="font-semibold text-gray-900 dark:text-white">Key Takeaways</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'technical' && (
            <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
              {technicalDetails}
            </p>
          )}

          {activeTab === 'future' && (
            <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
              {futureWork}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transform transition-transform duration-300 hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function ProjectsPage() {
  useParallax();

  const projects: Project[] = [
    {
      title: "Voice Authentication Mechanism for Secure Voice Calls",
      overview: "Developed an innovative voice authentication system using deep learning to enhance security in voice calls. This Cal Poly senior project implements passive liveness detection through a multi-model approach, utilizing state-of-the-art Wav2Vec models to authenticate speakers and detect spoofed audio in real-time.",
      technicalDetails: `Technical implementation centered around two fine-tuned Wav2Vec2 models:
  
  1. Spoof Detection Model:
  - Fine-tuned Facebook's Wav2Vec2 architecture for binary classification
  - Implemented MFCC and spectrogram feature extraction
  - Optimized for real-time processing of audio streams
  - Achieved high accuracy in detecting synthetic and replayed audio
  
  2. Speaker Identification Model:
  - Adapted Wav2Vec2 for speaker verification
  - Implemented transfer learning and domain adaptation techniques
  - Created robust feature extraction pipeline
  - Enhanced performance through custom loss functions
  
  The system processes audio through both models simultaneously, providing a dual-layer authentication mechanism that significantly improves security compared to single-model approaches.`,
      keyTakeaways: [
        "Successfully implemented dual-model voice authentication system",
        "Achieved high accuracy in both spoof detection and speaker verification",
        "Developed real-time processing capabilities for live voice calls",
        "Created a scalable architecture suitable for production deployment",
        "Demonstrated practical application of state-of-the-art speech processing models"
      ],
      futureWork: "Future development will focus on three key areas: model optimization for reduced latency, integration of multi-modal fusion techniques incorporating visual data, and deployment optimization for real-world applications. Planning to explore adversarial training methods to enhance robustness against novel spoofing attacks and implement edge deployment capabilities for improved privacy.",
      technologies: [
        "Python",
        "PyTorch",
        "Wav2Vec2",
        "Signal Processing",
        "TensorFlow",
        "Docker",
        "FastAPI"
      ],
      githubLink: "https://github.com/milesherrman/seniorproject",
      liveLink: "/snrproj",
      imageUrl: "/images/hf.png"
    },
    {
      title: "Modern Portfolio Website",
      overview: "Designed and developed a dynamic, interactive portfolio website using cutting-edge web technologies. This project serves as both a showcase of my work and a playground for experimenting with modern front-end development practices, featuring animated UI elements, responsive design, and seamless dark mode implementation.",
      technicalDetails: `Built with a modern tech stack emphasizing developer experience and performance:
  
  1. Core Technologies:
  - Next.js 14 with App Router for optimized routing and server components
  - TypeScript for type safety and improved development experience
  - Tailwind CSS for utility-first styling and rapid prototyping
  - React hooks for state management and component logic
  
  2. Enhanced Features:
  - Custom animations using CSS transforms and Tailwind transitions
  - Responsive design with mobile-first approach
  - Dark mode implementation with system preference detection
  - Interactive UI elements with smooth transitions
  - Optimized images and lazy loading for performance
  - SEO optimization using Next.js metadata API`,
      keyTakeaways: [
        "Implemented modern React patterns and best practices",
        "Created responsive layouts using Tailwind CSS",
        "Developed custom animations and interactive elements",
        "Achieved optimal performance scores in Lighthouse",
        "Applied TypeScript for enhanced code quality"
      ],
      futureWork: "Planning to expand the website with additional features including a blog section using MDX for technical writing, integration with GitHub API to automatically showcase latest projects, and implementation of a custom CMS for easier content management. Will also add interactive 3D elements using Three.js and improve accessibility features.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Lucide Icons",
        "Vercel",
        "shadcn/ui"
      ],
      githubLink: "https://github.com/milesherrman/portfoliowebsite",
      liveLink: "https://milesherrman.com",
      imageUrl: "/images/react.png"
    }
  ];

  return (
    <>

      <Hero />
      <div className="relative min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white parallax" data-speed="0.3">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}