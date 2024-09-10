/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underline: 'underline 0.3s ease-out',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
}