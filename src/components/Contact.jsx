import React, { useState } from 'react'
import { HiMail, HiPhone, HiCheckCircle, HiExclamation } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState({
    type: null, // 'success', 'error', 'loading'
    message: '',
  })

  const contactInfo = [
    {
      icon: <HiMail size={24} />,
      label: 'Email',
      value: 'aditya566sharma@gmail.com',
      action: 'mailto:aditya566sharma@gmail.com',
    },
    {
      icon: <HiPhone size={24} />,
      label: 'Phone',
      value: '+91-9811152',
      action: 'tel:+919811152',
    },
    {
      icon: <SiWhatsapp size={24} />,
      label: 'WhatsApp',
      value: '+91-9811152',
      action: 'https://wa.me/919811152',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsApp = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill all fields before sending',
      })
      return
    }

    const messageText = `Hello Aditya,\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/919811152?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill all fields',
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...',
    })

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
      
      const response = await axios.post(`${backendUrl}/api/contact`, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Error sending message. Please try later.',
      })
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: null, message: '' })
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Connect With Me</h3>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 cursor-pointer"
              >
                <div className="text-purple-400 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="font-semibold text-gray-200 hover:text-purple-300 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Follow me on social media:</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/ad-566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/40 transition-colors font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Ad-566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/40 transition-colors font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Send a Message</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-300'
                    : status.type === 'error'
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {status.type === 'success' && <HiCheckCircle size={20} />}
                  {status.type === 'error' && <HiExclamation size={20} />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex-1"
                >
                  {status.type === 'loading' ? '⏳ Sending...' : '✉️ Send via Email'}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 flex-1"
                >
                  💬 WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="glass p-8 text-center">
          <h3 className="text-xl font-bold text-purple-400 mb-4">Prefer Direct Contact?</h3>
          <p className="text-gray-300 mb-4">
            Feel free to reach out directly via email or phone. I usually respond within 24 hours!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:aditya566sharma@gmail.com"
              className="btn-primary"
            >
              Email Me
            </a>
            <a
              href="tel:+919811152"
              className="btn-secondary"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
