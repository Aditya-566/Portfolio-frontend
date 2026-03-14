import React from 'react'
import { HiStar, HiTrendingUp } from 'react-icons/hi'

const Achievements = () => {
  const achievements = [
    {
      metric: '250+',
      description: 'GitHub Contributions',
      details: 'Features, bug fixes, refactoring, and documentation improvements',
    },
    {
      metric: '10+',
      description: 'Full-Stack Projects',
      details: 'Built and deployed scalable web applications',
    },
    {
      metric: '5+',
      description: 'Certifications',
      details: 'From leading platforms and universities',
    },
    {
      metric: '100%',
      description: 'Open Source Contributor',
      details: 'Active collaborator on community projects',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-6 group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-1">
                <div className="text-4xl font-bold text-blue-700 mb-1">
                  {achievement.metric}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {achievement.description}
                </h3>
                <p className="text-sm text-slate-600">{achievement.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="p-8 bg-white rounded-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            <HiTrendingUp className="text-blue-600" />
            Highlights
          </h3>
          <ul className="space-y-4 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1 font-bold text-lg">✓</span>
              <span className="text-slate-700">Active open-source contributor with consistent GitHub activity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1 font-bold text-lg">✓</span>
              <span className="text-slate-700">Successfully deployed multiple applications on Vercel and Render</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1 font-bold text-lg">✓</span>
              <span className="text-slate-700">Strong problem-solving skills with focus on clean, maintainable code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1 font-bold text-lg">✓</span>
              <span className="text-slate-700">Passionate about learning new technologies and best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1 font-bold text-lg">✓</span>
              <span className="text-slate-700">Collaborative team player with excellent communication skills</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Achievements
