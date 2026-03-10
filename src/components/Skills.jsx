import React from 'react'
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiPostgresql, SiGit } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: ['C++', 'Java', 'Python', 'C', 'JavaScript', 'PHP', 'HTML', 'CSS'] },
    { title: 'Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'jQuery'] },
    { title: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { title: 'Tools & Platforms', skills: ['Git', 'VS Code', 'Visual Studio', 'XAMPP', 'Render', 'Vercel', 'Postman', 'Figma'] },
    { title: 'Soft Skills', skills: ['Problem-solving', 'Time Management', 'Collaboration', 'Creativity', 'Adaptability'] },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>

        {/* Featured Tech Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { name: 'C++', icon: <SiCplusplus size={40} /> },
            { name: 'Java', icon: <span className="text-4xl font-bold">☕</span> },
            { name: 'Python', icon: <SiPython size={40} /> },
            { name: 'JavaScript', icon: <SiJavascript size={40} /> },
            { name: 'React', icon: <SiReact size={40} /> },
            { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
            { name: 'MongoDB', icon: <SiMongodb size={40} /> },
            { name: 'Git', icon: <SiGit size={40} /> },
          ].map((tech) => (
            <div
              key={tech.name}
              className="card flex flex-col items-center justify-center text-center group"
            >
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-2">
                {tech.icon}
              </div>
              <p className="text-sm font-semibold text-gray-200">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Detailed Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
