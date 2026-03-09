import React from 'react'
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Lovely Professional University, Punjab, India',
      period: 'Since Aug 2023',
      cgpa: '7.05',
      icon: '🎓',
    },
    {
      degree: 'Intermediate (12th Grade)',
      field: 'Science Stream',
      institution: 'Kendriya Vidyalaya Bangana, Himachal Pradesh',
      period: '2022 – 2023',
      percentage: '82%',
      icon: '📚',
    },
    {
      degree: 'Matriculation (10th Grade)',
      field: 'General',
      institution: 'Kendriya Vidyalaya Bangana, Himachal Pradesh',
      period: '2020 – 2021',
      percentage: '68%',
      icon: '📖',
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-12">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{edu.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-gray-200">{edu.field}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-gray-300">
                    <HiLocationMarker className="text-purple-400 flex-shrink-0" />
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  {edu.cgpa && (
                    <p className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                      {edu.percentage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 glass p-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-2">
            <HiAcademicCap />
            Academic Timeline
          </h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-0 top-0 bottom-0 w-1 bg-gradient-main ml-4 md:ml-8"></div>

            {/* Timeline items */}
            <div className="space-y-8 pl-12 md:pl-16">
              {[
                { year: '2023-', label: 'Started BTech CSE at LPU' },
                { year: '2023', label: 'Completed Intermediate (82%)' },
                { year: '2023', label: 'Started MERN Stack Learning' },
                { year: '2024', label: 'First Live Project Deployment' },
                { year: '2025', label: 'Multiple Certifications & Projects' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center md:left-4">
                    <div className="w-4 h-4 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400 font-bold">{item.year}</span>
                    <p className="text-gray-300">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
