"use client"
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Define an interface for the Project structure
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string | null;
  liveLink?: string | null;
  imageUrl: string;
}

// Type the ProjectCard component props
interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveLink, 
  imageUrl 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={`${title} project screenshot`} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
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
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className={`text-gray-600 dark:text-gray-300 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {description}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-600 hover:text-primary-700 mb-4"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Cybersecurity Senior Project",
      description: "A comprehensive cybersecurity analysis and threat detection system developed as a senior capstone project. The project involved creating a multi-layered security framework that integrates network monitoring, intrusion detection, and real-time threat analysis using advanced machine learning algorithms.",
      technologies: [
        "Python", 
        "Machine Learning", 
        "Network Security", 
        "Tensorflow", 
        "Wireshark"
      ],
      githubLink: "https://github.com/yourusername/cybersecurity-project",
      liveLink: null,
      imageUrl: "/api/placeholder/800/400"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. The site showcases my software development projects, provides a clean and interactive user experience, and demonstrates my skills in full-stack web development. Features include dark mode, smooth animations, and comprehensive project showcases.",
      technologies: [
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "React", 
        "Vercel"
      ],
      githubLink: "https://github.com/yourusername/portfolio-website",
      liveLink: "https://yourdomain.com",
      imageUrl: "/api/placeholder/800/400"
    }
  ];

  return (
    <div className="container-wrapper min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h1>
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
  );
}