import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import SocialLinks from './SocialLinks'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 animate-fade-in bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Aditya Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 slide-up font-heading">
          Aditya <span className="gradient-text">Sharma</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-blue-700 mb-4 font-semibold">
          Full Stack Developer | MERN Stack Specialist | Problem Solver
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
          "I build scalable web applications and intelligent software solutions."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            View Projects
            <HiArrowRight />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <SocialLinks />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce mt-8">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
