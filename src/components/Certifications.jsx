import React from 'react'
import { HiAcademicCap, HiCheckCircle } from 'react-icons/hi'

const Certifications = () => {
  const certifications = [
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Infosys',
      year: '2025',
      icon: '🤖',
    },
    {
      title: 'Data Structures and Algorithms Using C++',
      issuer: 'Lovely Professional University',
      year: '2025',
      icon: '📊',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      year: '2025',
      icon: '☁️',
    },
    {
      title: 'Excellent Python 3 Bootcamp',
      issuer: 'Udemy',
      year: '2023',
      icon: '🐍',
    },
    {
      title: 'Lean Management',
      issuer: 'Simplilearn',
      year: '2023',
      icon: '📈',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-12">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card flex items-start gap-4 group"
            >
              <div className="text-3xl flex-shrink-0">{cert.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-purple-400 mb-1 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <HiCheckCircle className="text-green-400" size={14} />
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Gallery Placeholder */}
        <div className="mt-12 glass p-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">Certificate Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-500/30 hover:border-purple-500 transition-colors"
              >
                <div className="text-center">
                  <HiAcademicCap className="text-gray-500 mx-auto mb-2" size={32} />
                  <p className="text-xs text-gray-500">Certificate {i}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Certificate images coming soon! 📸
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
