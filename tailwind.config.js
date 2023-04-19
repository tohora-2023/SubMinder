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
        food: '#0011FF',
        entertainment: '#06B300',
        necessities: '#FFC400',
        bills: '#FF0000',
        productivity: '#C269D6',
        travel: '#5DC6FF',
        'free-trial': '#17b3a1',
      },
    },
  },
  plugins: [],
}
