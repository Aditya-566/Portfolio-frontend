import React from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Training = () => {
  const trainings = [
    {
      id: 1,
      title: 'Mastering Data Structures and Algorithms',
      platform: 'Lovely Professional University',
      duration: 'Ongoing',
      description: 'Comprehensive training on core data structures and algorithmic concepts using C++',
      highlights: [
        'Executed numerous coding problems across different platforms',
        'Strengthened practical understanding of core data structures',
        'Learned real-world applications of data structures',
        'Built desktop-based Maze Solver using C++ and SFML',
        'Applied algorithmic concepts such as graphs and traversal techniques',
      ],
      tech: ['C++', 'Data Structures', 'Algorithms', 'Pathfinding', 'SFML'],
      projects: [
        {
          name: 'Maze Solver',
          url: 'https://github.com/Aditya-566/Maze_solver-desktop-application-using-cpp',
          description: 'Desktop application implementing pathfinding algorithms with graphical visualization',
        },
      ],
    },
  ]

  return (
    <section id="training" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Training & Courses</h2>

        <div className="space-y-6">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="group relative overflow-hidden border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 p-6 bg-white"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 group-hover:text-blue-600 transition-colors mb-2">
                    {training.title}
                  </h3>
                  <p className="text-lg font-semibold text-slate-700">{training.platform}</p>
                  <p className="text-sm text-slate-600 font-medium">{training.duration}</p>
                </div>

                {/* Description */}
                <p className="text-slate-700 font-medium mb-4">{training.description}</p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-blue-700 mb-3">Key Highlights:</h4>
                  <ul className="text-sm text-slate-700 font-medium space-y-2">
                    {training.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-700 mb-3">Technologies & Concepts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {training.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Built */}
                {training.projects && training.projects.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-700 mb-3">Projects Built:</h4>
                    <div className="space-y-3">
                      {training.projects.map((project, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h5 className="font-semibold text-blue-700 mb-1">{project.name}</h5>
                              <p className="text-sm text-slate-600">{project.description}</p>
                            </div>
                            <a
                              href={project.url}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm font-medium whitespace-nowrap"
                            >
                              <HiCode size={14} />
                              Code
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training
