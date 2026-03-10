import React from 'react'
import { HiAcademicCap, HiCheckCircle } from 'react-icons/hi'

const Certifications = () => {
  const certifications = [
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Infosys',
      year: '2025',
      icon: '🤖',
      image: '/images/certificates/infosys-ai.jpg'
    },
    {
      title: 'Data Structures and Algorithms Using C++',
      issuer: 'Lovely Professional University',
      year: '2025',
      icon: '📊',
      image: '/images/certificates/dsa-cpp.jpg'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      year: '2025',
      icon: '☁️',
      image: '/images/certificates/cloud-computing.jpg'
    },
    {
      title: 'Excellent Python 3 Bootcamp',
      issuer: 'Udemy',
      year: '2023',
      icon: '🐍',
      image: '/images/certificates/python.jpg'
    },
    {
      title: 'Lean Management',
      issuer: 'Simplilearn',
      year: '2023',
      icon: '📈',
      image: '/images/certificates/lean-management.jpg'
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

        {/* Certificate Gallery */}
        <div className="mt-12 py-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Certificate Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-xs font-bold text-purple-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-white font-semibold line-clamp-2">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
