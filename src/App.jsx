import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`${isDark ? 'bg-gradient-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
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
