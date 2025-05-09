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
        }
      },
      animation: {
        'realLightning': 'realLightning 10s infinite',
        'thunderGlow': 'thunderGlow 10s infinite',
        'thunderShake': 'thunderShake 10s infinite',
        'rainDrop': 'rainDrop 1s linear infinite',
        'cloudMove': 'cloudMove 20s infinite ease-in-out'
      },
    },
  },
  plugins: [],
};
