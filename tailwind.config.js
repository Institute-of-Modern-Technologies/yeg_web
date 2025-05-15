/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a1e5c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      transitionDelay: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      keyframes: {
        realLightning: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 0 },
          '20%, 24%, 55%': { opacity: 1 }
        },
        thunderGlow: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { boxShadow: '0 0 0px 0px rgba(147, 197, 253, 0)' },
          '20%, 24%, 55%': { boxShadow: '0 0 30px 10px rgba(147, 197, 253, 0.5)' }
        },
        thunderShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 24%, 55%': { transform: 'translateX(-1px)' },
          '21%, 25%, 56%': { transform: 'translateX(2px)' },
          '22%, 26%, 57%': { transform: 'translateX(-4px)' },
          '23%, 27%, 58%': { transform: 'translateX(4px)' }
        },
        rainDrop: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        cloudMove: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' }
        },
        floatDelayed: {
          '0%': { transform: 'translateY(-15px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' }
        },
        floatDot: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-5px) translateX(-3px)' },
          '100%': { transform: 'translateY(0) translateX(0)' }
        },
        slowPulse: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.05)' }
        },
        questionMarkBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 }
        },
        morphIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        waveRise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pathMorph: {
          '0%': { d: 'path("M0,96L60,112C120,128,240,160,360,186.7C480,213,600,235,720,213.3C840,192,960,128,1080,122.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")' },
          '50%': { d: 'path("M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,160C840,128,960,64,1080,64C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")' },
          '100%': { d: 'path("M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,160C840,171,960,213,1080,192C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")' }
        },
        morph: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'realLightning': 'realLightning 10s infinite',
        'thunderGlow': 'thunderGlow 10s infinite',
        'thunderShake': 'thunderShake 10s infinite',
        'rainDrop': 'rainDrop 1s linear infinite',
        'cloudMove': 'cloudMove 20s infinite ease-in-out',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'floatDelayed 5s ease-in-out infinite',
        'float-dot': 'floatDot 6s ease-in-out infinite',
        'slowpulse': 'slowPulse 8s ease-in-out infinite',
        'question-bounce': 'questionMarkBounce 3s ease-in-out infinite',
        'blink': 'blink 3s ease-in-out infinite',
        'morph-in': 'morphIn 1s ease-in-out forwards',
        'wave-rise': 'waveRise 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'path-morph': 'pathMorph 8s ease-in-out infinite'
      },
    },
  },
  plugins: [],
};
