/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/components/**/*.{html,ts,tsx}',
    './server/public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'accent-yellow': '#FFC400',
      },
    },
  },
  plugins: [],
}
