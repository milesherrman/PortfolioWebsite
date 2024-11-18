import Image from 'next/image'

export default function About() {
  // You can move this to a separate data file later
  const skills = [
    { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", techs: ["Node.js", "Express", "MySQL", "Prisma"] },
    { category: "Tools", techs: ["Git", "VS Code", "Docker", "AWS"] },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container-wrapper">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            About Me
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Full-stack developer passionate about building web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="prose dark:prose-invert">
              <p>
                I'm a full-stack developer with a passion for creating elegant,
                efficient solutions to complex problems. With experience in both
                frontend and backend development, I bring a comprehensive
                perspective to every project.
              </p>
              <p>
                When I'm not coding, you can find me [your interests/hobbies].
                I believe in continuous learning and staying up-to-date with
                the latest technologies.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-full 
                                   text-sm font-medium bg-gray-100 text-gray-800
                                   dark:bg-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}