import React, { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamation } from 'react-icons/hi'
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
      value: '+91-9816511152',
      action: 'tel:+919816511152',
    },
    {
      icon: <SiWhatsapp size={24} />,
      label: 'WhatsApp',
      value: '+91-9816511152',
      action: 'https://wa.me/919816511152',
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
    const whatsappUrl = `https://wa.me/919816511152?text=${encodedMessage}`
    
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
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-blue-700 mb-6">Connect With Me</h3>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 cursor-pointer border border-slate-200 bg-white hover:border-blue-400"
              >
                <div className="text-blue-600 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-600">{info.label}</p>
                  <p className="font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-slate-600 mb-3">Follow me on social media:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/aditya566/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Aditya-566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card border border-slate-200 bg-white">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Send a Message</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-emerald-100 text-emerald-700'
                    : status.type === 'error'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-blue-100 text-blue-700'
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
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 flex-1"
                >
                  💬 WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="glass p-8 text-center bg-white border border-slate-200">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Prefer Direct Contact?</h3>
          <p className="text-slate-700 mb-4">
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
              href="tel:+919816511152"
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
