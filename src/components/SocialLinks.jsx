import React from 'react'
import { HiOutlineExternalLink, HiEnvelope, HiGlobeAlt } from 'react-icons/hi'

const SocialLinks = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ad-566',
      icon: <HiGlobeAlt size={24} />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ad-566',
      icon: <HiGlobeAlt size={24} />,
      color: 'hover:text-gray-300',
    },
    {
      name: 'Email',
      url: 'mailto:aditya@gmail.com',
      icon: <HiEnvelope size={24} />,
      color: 'hover:text-red-400',
    },
  ]

  return (
    <>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-125`}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </>
  )
}

export default SocialLinks
