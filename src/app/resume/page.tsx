"use client"
import React, { useState } from 'react';
import { Download, Mail, Linkedin, Github, MapPin, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';



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
        <div className="flex justify-end items-center gap-1 text-gray-500 dark:text-gray-400 mb-4">
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
      {/* Header Section */}
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            {/* Name with animated gradient */}
            <h1 className="mt-16 text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span
                className={`bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300 
                            bg-clip-text text-transparent animate-gradient-x`}
                style={{
                  animationDuration: '6s', // Slower animation
                  backgroundSize: '150%',  // Less extreme fade
                }}
              >
                Resume
              </span>
              <span className="text-primary-500 dark:text-primary-300 animate-pulse" style={{ animationDuration: '2s' }}>
                .
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineer & Creative Developer
            </p>
            <div className="flex justify-center gap-4 mb-8">
              
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
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">California Polytechnic State University - San Luis Obispo</h3>
                  <p className="text-primary-500">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">September 2021 - September 2024</p>
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
              date="September 2024 – Current"
              location="Madrid, Spain"
              description={[
                "Assisted high school teachers with English language lessons",
                "Developed interactive classroom activities and personalized lesson plans"
              ]}
            />
            <ExperienceCard
              role="Technical Sales Associate"
              company="Exclusive Networks"
              date="January 2024 – September 2024"
              location="San Luis Obispo, California"
              description={[
                "Trained extensively on Fortinet cybersecurity fundamentals",
                "Mentored eight new and junior sales associates",
                "Led cold outreach initiatives, securing a $300K credit line partnership"
              ]}
            />
            <ExperienceCard
              role="Cybersecurity Intern"
              company="Beyond Secure"
              date="June 2023 – September 2023"
              location="Austin, Texas"
              description={[
                "Implemented and managed Cloudflare products",
                "Participated in technical audit sessions with clients",
                "Contributed to vulnerability identification and resolution",
                "Prepared for and passed the CISSP exam"
              ]}
            />
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

          
        </div>
      </div>
    </>
  );
}