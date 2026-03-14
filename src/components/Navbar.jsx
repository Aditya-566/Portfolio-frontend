import React, { useState, useEffect } from 'react'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Contact']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? (isDark ? 'bg-slate-900/90 backdrop-blur-lg border-b border-slate-700 py-2' : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm')
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with 360 rotation */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <span 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-3xl font-extrabold cursor-pointer tracking-tighter ${isDark ? 'text-white' : 'text-blue-700'}`}
            >
              AS
            </span>
          </motion.div>

          {/* Desktop Navigation with Assembling Animation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                onClick={() => scrollToSection(link)}
                className={`relative group ${isDark ? 'text-gray-200 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'} font-semibold transition-colors duration-300`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-xl ${isDark ? 'bg-blue-500/10 text-amber-400 border border-blue-500/20' : 'bg-slate-100 text-slate-700 border border-slate-300'} hover:scale-110 transition-all duration-300 shadow-lg`}
            >
              {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20 text-amber-400' : 'bg-slate-200 text-slate-700'}`}
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-500' : 'text-slate-400'}`}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-4 pb-6 space-y-2 overflow-hidden`}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link)}
                  className={`block w-full text-left px-5 py-3 rounded-xl font-medium ${isDark ? 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'} transition-all duration-300`}
                >
                  {link}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
