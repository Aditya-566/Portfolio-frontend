import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`${isDark ? 'bg-slate-900 text-gray-100' : 'bg-white text-slate-900'} transition-colors duration-300 min-h-screen relative`}>
        <div className="spotlight"></div>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
