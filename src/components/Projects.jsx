import React from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '🔗 GrievLink — Grievance Redressal Platform',
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
        { name: 'GitHub', url: '#' },
      ],
    },
    {
      id: 2,
      title: '🛍️ Intelligent Deal Finder',
      duration: 'Jan 2025 – May 2025',
      description: 'Developed an intelligent price comparison engine that recommends the best e-commerce deals.',
      responsibilities: [
        'Built web scraping pipelines for real-time price tracking',
        'Extracted product specifications and availability',
        'Optimized data analysis for faster recommendations',
      ],
      tech: ['Python', 'BeautifulSoup', 'Scrapy', 'Data Analysis'],
      links: [
        { name: 'GitHub', url: 'https://github.com/Aditya-566/Intelligent-Deal-Finder' },
      ],
    },
    {
      id: 3,
      title: '🎓 Smart Classroom & Timetable Scheduler',
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
        { name: 'GitHub', url: '#' },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.id === 3 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 font-semibold">{project.duration}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-medium"
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
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded-lg transition-colors text-sm font-medium"
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
