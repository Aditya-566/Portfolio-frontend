import React from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GrievLink — Grievance Redressal Platform',
      duration: 'Jun 2025 – Jul 2025',
      description: 'Built a full-stack grievance management system enabling seamless communication between users and authorities.',
      responsibilities: [
        'Developed responsive frontend using React.js',
        'Built REST APIs using Node.js and Express.js',
        'Implemented CRUD operations and MongoDB integration',
        'Deployed frontend on Vercel and backend on Render',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      links: [
        { name: 'Live Demo', url: 'https://grievance-platform.vercel.app/' },
        
      ],
    },
    {
      id: 2,
      title: 'Intelligent Deal Finder',
      duration: 'Jan 2025 – May 2025',
      description: 'Developed an intelligent price comparison engine that recommends the best e-commerce deals.',
      responsibilities: [
        'Built web scraping pipelines for real-time price tracking',
        'Extracted product specifications and availability',
        'Optimized data analysis for faster recommendations',
      ],
      tech: ['MERN', 'react js', 'ScraperAPI', 'SendGrid'],
      links: [
        { name: 'Live Demo', url: 'https://intelligent-deal-finder-frontend.vercel.app/' },
      ],
    },
    {
      id: 3,
      title: 'Smart Classroom & Timetable Scheduler',
      duration: 'Ongoing',
      description: 'Designed an automated academic timetable scheduling system with intelligent conflict detection.',
      responsibilities: [
        'Developed full MERN stack application',
        'Implemented secure role-based authentication',
        'Designed dynamic dashboards for timetable management',
        'Built scalable REST APIs and optimized database schemas',
        'Deployed on Vercel and Render',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Tailwind CSS'],
      links: [
        { name: 'Live Demo', url: 'https://smart-scheduler-fontend.vercel.app' },
       
      ],
    },
    {
      id: 4,
      title: 'Desktop-based Maze Solver',
      duration: 'Completed',
      description: 'Built a desktop-based Maze Solver using C++ and SFML, implementing pathfinding algorithms with graphical visualization.',
      responsibilities: [
        'Implemented pathfinding algorithms with graphical visualization',
        'Applied graph data structures and traversal techniques (BFS/DFS)',
        'Executed numerous coding problems to strengthen understanding of core data structures',
        'Created user-friendly desktop interface with real-time maze solving',
      ],
      tech: ['C++', 'SFML', 'Data Structures', 'Algorithms'],
      links: [
        { name: 'GitHub', url: 'https://github.com/Aditya-566/Maze_solver-desktop-application-using-cpp' },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.id === 3 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}
            >
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 font-bold">{project.duration}</p>
                <p className="text-slate-700 font-medium mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-blue-700 mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-slate-700 font-medium space-y-1">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm font-medium"
                    >
                      {link.name === 'GitHub' ? <HiCode size={16} /> : <HiExternalLink size={16} />}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
