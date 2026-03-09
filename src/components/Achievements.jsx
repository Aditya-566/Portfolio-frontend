import React from 'react'
import { HiStar, HiTrendingUp } from 'react-icons/hi'

const Achievements = () => {
  const achievements = [
    {
      metric: '250+',
      description: 'GitHub Contributions',
      details: 'Features, bug fixes, refactoring, and documentation improvements',
      icon: '🔥',
    },
    {
      metric: '10+',
      description: 'Full-Stack Projects',
      details: 'Built and deployed scalable web applications',
      icon: '🚀',
    },
    {
      metric: '5+',
      description: 'Certifications',
      details: 'From leading platforms and universities',
      icon: '🎓',
    },
    {
      metric: '100%',
      description: 'Open Source Contributor',
      details: 'Active collaborator on community projects',
      icon: '🤝',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card flex items-center gap-6 group"
            >
              <div className="text-5xl flex-shrink-0">{achievement.icon}</div>
              <div className="flex-1">
                <div className="text-3xl font-bold gradient-text mb-1">
                  {achievement.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1 group-hover:text-purple-300 transition-colors">
                  {achievement.description}
                </h3>
                <p className="text-sm text-gray-400">{achievement.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="glass p-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
            <HiStar className="text-yellow-400" />
            Highlights
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span className="text-gray-300">Active open-source contributor with consistent GitHub activity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span className="text-gray-300">Successfully deployed multiple applications on Vercel and Render</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span className="text-gray-300">Strong problem-solving skills with focus on clean, maintainable code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span className="text-gray-300">Passionate about learning new technologies and best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span className="text-gray-300">Collaborative team player with excellent communication skills</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Achievements
