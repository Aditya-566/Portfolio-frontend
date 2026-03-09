import React, { useState } from 'react'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Contact']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`${isDark ? 'bg-slate-900/80 border-b border-purple-500/20' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md sticky top-0 z-50 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="gradient-text text-2xl font-bold cursor-pointer hover:scale-110 transition-transform">
              AS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`${isDark ? 'text-gray-200 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} font-medium transition-colors duration-200`}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 animate-slide-up`}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${isDark ? 'hover:bg-purple-500/20' : 'hover:bg-gray-100'} transition-colors`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
