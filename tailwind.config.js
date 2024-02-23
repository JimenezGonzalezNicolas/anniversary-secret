/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Agrega un gradiente para el fondo del cielo nocturno
      backgroundImage: {
        'cielo-nocturno': "linear-gradient(to top, #1e3c72 0%, #2a5298 100%)",
      },
      // Extiende las animaciones para incluir el parpadeo
      animation: {
        'parpadeo': 'parpadeo 1.5s infinite alternate',
        // Mantén tus animaciones existentes
        'slide-up': 'slideUp 16s infinite linear',
        'slide-down': 'slideDown 16s infinite linear',
      },
      keyframes: {
        parpadeo: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        // Tus keyframes existentes
        slideUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
}
