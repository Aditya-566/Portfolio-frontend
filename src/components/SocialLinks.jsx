import React from 'react';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya566/',
      icon: <FaLinkedin size={24} />,
      color: 'hover:text-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Aditya-566',
      icon: <FaGithub size={24} />,
      color: 'hover:text-slate-700',
    },
    {
      name: 'Email',
      url: 'mailto:aditya566sharma@gmail.com',
      icon: <HiOutlineEnvelope size={24} />,
      color: 'hover:text-cyan-600',
    },
  ];

  return (
    <>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-slate-700 ${social.color} transition-all duration-300 transform hover:scale-125`}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
