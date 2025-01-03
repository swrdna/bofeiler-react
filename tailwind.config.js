/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
  },
};
