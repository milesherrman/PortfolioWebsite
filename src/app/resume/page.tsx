import React from 'react';
import { Download } from 'lucide-react';

const ResumePage = () => {
  // Sample resume data - replace with your actual data
  const resumeData = {
    name: "John Doe",
    title: "Software Engineer",
    contact: {
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe"
    },
    experience: [
      {
        company: "Tech Company",
        position: "Senior Software Engineer",
        period: "2020 - Present",
        achievements: [
          "Led development of core platform features serving 1M+ users",
          "Improved system performance by 40% through optimization",
          "Mentored 5 junior developers"
        ]
      },
      {
        company: "Startup Inc",
        position: "Software Engineer",
        period: "2018 - 2020",
        achievements: [
          "Developed and launched company's flagship mobile app",
          "Implemented CI/CD pipeline reducing deployment time by 60%"
        ]
      }
    ],
    education: [
      {
        school: "University of Technology",
        degree: "BS in Computer Science",
        year: "2018"
      }
    ],
    skills: [
      "JavaScript", "React", "Node.js", "Python",
      "AWS", "Docker", "Git", "Agile"
    ]
  };

  const handleDownload = () => {
    // In a real implementation, this would trigger the download of your actual resume PDF
    alert("In a real implementation, this would download the resume PDF");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with download button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Personal Info */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">{resumeData.name}</h2>
            <p className="text-xl text-gray-600 mt-2">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-600">
              <span>{resumeData.contact.email}</span>
              <span>{resumeData.contact.phone}</span>
              <span>{resumeData.contact.location}</span>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-gray-800">{exp.company}</h4>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700 mb-2">{exp.position}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-gray-800">{edu.school}</h4>
                  <span className="text-gray-600">{edu.year}</span>
                </div>
                <p className="text-gray-700">{edu.degree}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;