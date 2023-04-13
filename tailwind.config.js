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
        'subminder-nude': '#F5E1DA',
        'subminder-indigo': '#3023AE',
        'subminder-purple': '#C269D6',
      },
    },
  },
  plugins: [],
}
