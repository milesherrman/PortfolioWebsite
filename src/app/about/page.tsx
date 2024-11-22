"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Code2, Network, Rocket, Users, Coffee, Brain } from "lucide-react";


export default function About() {
  const [activeTab, setActiveTab] = useState("personal");

  const skills = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express", "MySQL", "Prisma"],
      icon: <Network className="w-6 h-6" />,
    },
    {
      category: "Tools",
      techs: ["Git", "VS Code", "Docker", "AWS"],
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const interests = [
    {
      title: "Social Connections",
      description: "Love meeting new people and building meaningful relationships",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Continuous Learning",
      description: "Always excited to explore new technologies and concepts",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Work-Life Balance",
      description: "Believer in maintaining energy through diverse activities",
      icon: <Coffee className="w-6 h-6" />,
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <div className="container-wrapper flex flex-col md:flex-row items-center gap-12 py-16">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400">
            <Image
              src="/images/grad.JPG"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="flex-1">
          <h1 className="mt-16 text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300 bg-clip-text text-transparent animate-gradient-x"
                style={{
                  animationDuration: '6s',
                  backgroundSize: '150%',
                }}>
                About Me
              </span>

              <span className="text-primary-500 dark:text-primary-300 animate-pulse" style={{ animationDuration: '2s' }}>.</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Hi, I'm Miles Herrman, a recent Computer Science graduate with a passion for solving 
              complex problems and a love for connecting with others. My time at Cal Poly was 
              unforgettable—balancing rigorous coursework, hands-on projects, and meaningful 
              internships prepared me to tackle real-world challenges.
            </p>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              When I’m not working on projects or reading up on cybersecurity news, you’ll find me embracing 
              the outdoors. Whether it’s running, snowboarding, biking, climbing, or practicing 
              guitar, I’m always seeking new adventures and creative outlets. I’m excited to take 
              what I’ve learned from my studies and work experiences and apply it to practical, 
              impactful solutions.
            </p>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              If you're looking for someone who combines technical expertise with enthusiasm for 
              exploration and teamwork, let’s connect!
            </p>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="container-wrapper flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {["personal", "technical"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === tab
                    ? "bg-primary-500 text-white shadow-lg" // Solid background color for the active tab
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>


        {/* Content Sections */}
        <div className="container-wrapper grid gap-8">
          {activeTab === "personal" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <div
                  key={interest.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="text-primary-500 dark:text-primary-400 mb-4">{interest.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{interest.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="text-primary-500 dark:text-primary-400 mb-4">{skillGroup.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillGroup.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </>
  );
}
