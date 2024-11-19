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
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 section-padding"
    >
      {/* Hero Section */}
      <div className="container-wrapper flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
          <Image
            src="/api/placeholder/256/256"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Hey, I'm Miles 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Full-stack developer with a passion for cybersecurity and human connections
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
                  ? "bg-white shadow-md text-primary-color"
                  : "text-gray-600 dark:text-gray-400 hover:text-primary-color"
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
                className="project-card"
              >
                <div className="text-secondary-color mb-4">{interest.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="project-card"
              >
                <div className="text-secondary-color mb-4">{skillGroup.icon}</div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech-badge"
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
    </div>
  );
}
