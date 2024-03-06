/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': 'var(--simple-violet)',
        'light-violet': 'var(--light-violet)',
        'dark-violet': 'var(--dark-violet)',
        'black-alpha': 'rgba(0, 0, 0, .25)'
      },
    },
  },
  plugins: [
      require('tailwind-fontawesome')
  ],
}