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
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-6 group"
            >
              <div className="flex-1">
                <div className="text-3xl font-bold gradient-text mb-1">
                  {achievement.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1 group-hover:text-cyan-300 transition-colors">
                  {achievement.description}
                </h3>
                <p className="text-sm text-gray-400">{achievement.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            Highlights
          </h3>
          <ul className="space-y-4 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 font-bold">✓</span>
              <span className="text-gray-200">Active open-source contributor with consistent GitHub activity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 font-bold">✓</span>
              <span className="text-gray-200">Successfully deployed multiple applications on Vercel and Render</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 font-bold">✓</span>
              <span className="text-gray-200">Strong problem-solving skills with focus on clean, maintainable code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 font-bold">✓</span>
              <span className="text-gray-200">Passionate about learning new technologies and best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1 font-bold">✓</span>
              <span className="text-gray-200">Collaborative team player with excellent communication skills</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Achievements
