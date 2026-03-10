import React from 'react'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const footerLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="gradient-text text-2xl font-bold mb-2">Aditya Sharma</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer | MERN Stack Specialist</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <a href="mailto:aditya566sharma@gmail.com" className="hover:text-purple-400 transition-colors">
                  aditya566sharma@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+919816511152" className="hover:text-purple-400 transition-colors">
                  +91-9816511152
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-2">
            © {year} Aditya Sharma | Designed with
            <HiHeart className="text-red-500" size={16} />
            by Aditya
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/ad-566"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ad-566"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 bg-gradient-main rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 transform hover:scale-110 z-40"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
