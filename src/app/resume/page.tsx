"use client"
import React, { useState } from 'react';
import { Download, Mail, Linkedin, Github, MapPin, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

// Reuse the AnimatedBackground component from your projects page
const AnimatedBackground = () => {
  const backgroundElements = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: (i * 73) % 100,
    top: (i * 47) % 100,
    width: 50 + ((i * 83) % 100),
    height: 50 + ((i * 83) % 100),
    animationDelay: (i * 0.1) % 5,
    animationDuration: 5 + ((i * 89) % 10)
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-primary-500/10 animate-pulse"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ResumeSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-primary-500" size={24} />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    {children}
  </div>
);

const ExperienceCard = ({ role, company, date, location, description }) => (
  <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{role}</h3>
        <p className="text-primary-500 font-medium">{company}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600 dark:text-gray-300">{date}</p>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SkillTag = ({ skill }) => (
  <span className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transform transition-transform duration-300 hover:scale-110">
    {skill}
  </span>
);

export default function ResumePage() {
  const handleDownload = () => {
    // Replace with actual PDF download logic
    window.open('/MilesResumeNov2024.pdf', '_blank');
  };

  return (
    <>
      <AnimatedBackground />
      
      {/* Header Section */}
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Miles Herrman
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineer & Creative Developer
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="mailto:milesherrmans@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/milesherrman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/milesherrman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <button
              onClick={handleDownload}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-primary-600 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Education Section */}
          <ResumeSection title="Education" icon={GraduationCap}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">California Polytechnic State University</h3>
                  <p className="text-primary-500">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">Sept 2021 - Sept 2024</p>
                  <p className="text-gray-500 dark:text-gray-400">GPA: 3.75</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                <li>Graduated Magna Cum Laude in just 3 years</li>
                <li>Served as an Orientation Leader for Cal Poly's Week of Welcome</li>
                <li>Active member of the Distance Club</li>
              </ul>
            </div>
          </ResumeSection>

          {/* Experience Section */}
          <ResumeSection title="Experience" icon={Briefcase}>
            <ExperienceCard
              role="English Teaching Assistant"
              company="CIEE"
              date="Sept 2024 – Current"
              location="Madrid, Spain"
              description={[
                "Assisted high school teachers with English language lessons",
                "Developed interactive classroom activities and personalized lesson plans"
              ]}
            />
            <ExperienceCard
              role="Technical Sales Associate"
              company="Exclusive Networks"
              date="Jan 2024 – Sept 2024"
              location="SLO, California"
              description={[
                "Trained extensively on Fortinet cybersecurity fundamentals",
                "Mentored eight new and junior sales associates",
                "Led cold outreach initiatives, securing a $300K credit line partnership"
              ]}
            />
            <ExperienceCard
              role="Cybersecurity Intern"
              company="Beyond Secure"
              date="June 2023 – Sept 2023"
              location="Austin, Texas"
              description={[
                "Implemented and managed Cloudflare products",
                "Participated in technical audit sessions with clients",
                "Contributed to vulnerability identification and resolution",
                "Prepared for and passed the CISSP exam"
              ]}
            />
          </ResumeSection>

          {/* Skills Section */}
          <ResumeSection title="Technical Skills" icon={BookOpen}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "C", "Java", "R", "HTML", "CSS", "JavaScript",
                  "Visual Studio Code", "GitHub", "RStudio", "React.js",
                  "MySQL", "Docker", "NetSuite"
                ].map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            </div>
          </ResumeSection>

          {/* Certifications Section */}
          <ResumeSection title="Certifications" icon={Award}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-primary-500" />
                  CISSP: Certified Information Systems Security Professional
                </li>
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-primary-500" />
                  Fortinet Certified Fundamentals: Technical Introduction to Cybersecurity
                </li>
              </ul>
            </div>
          </ResumeSection>
        </div>
      </div>
    </>
  );
}