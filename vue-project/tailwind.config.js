/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-amber-50', 'bg-amber-100', 'bg-amber-200',
    'bg-red-500','bg-red-600','bg-red-700','bg-red-800','bg-red-900',
    'bg-blue-500','bg-blue-600','bg-blue-700','bg-blue-800','bg-blue-900',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-indigo-500','bg-indigo-600','bg-indigo-700','bg-indigo-800','bg-indigo-900',
  ],
}


