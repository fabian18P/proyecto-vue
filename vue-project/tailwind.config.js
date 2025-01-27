/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',  // Se activa a partir de 1024px
      xl: '1280px',  // Se activa a partir de 1280px
      '2xl': '1536px', // Se activa a partir de 1536px
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(text|bg)-(amber|red|blue|green|yellow|purple|indigo|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    }
 ],
};