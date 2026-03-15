import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-12">About Me</h2>

        <div className="mt-12 p-8 md:p-12 bg-white rounded-xl border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center md:text-left">
            I am a <span className="font-semibold text-blue-700">Computer Science Engineering student</span> at 
            <span className="font-semibold text-blue-700"> Lovely Professional University</span> passionate about 
            building full-stack applications and solving real-world problems using modern technologies.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center md:text-left">
            I specialize in <span className="font-semibold text-blue-700">MERN stack development</span>, backend systems, 
            and data-driven applications. I enjoy transforming ideas into scalable digital products and collaborating on 
            innovative projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-blue-700 font-semibold mb-2">🎓 Education</h3>
              <p className="text-slate-700">BTech CSE at Lovely Professional University (Since Aug 2023)</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-blue-700 font-semibold mb-2">💼 Focus</h3>
              <p className="text-slate-700">Full-Stack Development & Backend Systems</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-blue-700 font-semibold mb-2">🚀 Passion</h3>
              <p className="text-slate-700">Building scalable applications & solving complex problems</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-blue-700 font-semibold mb-2">🤝 Collaboration</h3>
              <p className="text-slate-700">Open-source contributions & team projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
