/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        gradient: {
          from: '#10b981', // emerald-500
          via: '#06b6d4',   // cyan-500
          to: '#3b82f6',   // blue-500
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #000000 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(6, 182, 212, 0.5)',
      },
    },
  },
  plugins: [],
}
