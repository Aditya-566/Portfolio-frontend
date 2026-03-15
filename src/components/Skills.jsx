import React from 'react'

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: ['C++', 'Java', 'Python', 'C', 'JavaScript', 'PHP', 'HTML', 'CSS'] },
    { title: 'Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'jQuery'] },
    { title: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { title: 'Tools & Platforms', skills: ['Git', 'VS Code', 'Visual Studio', 'XAMPP', 'Render', 'Vercel', 'Postman', 'Figma'] },
    { title: 'Soft Skills', skills: ['Problem-solving', 'Time Management', 'Collaboration', 'Creativity', 'Adaptability'] },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
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
