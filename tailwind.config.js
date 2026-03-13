/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF9F5',
        sand: '#F3EDE3',
        gold: '#C7A872',
        stone: '#E5E2DC',
        navy: '#1e334e',
        grayLight: '#dee0df',
        grayMedium: '#4f6479',
        graySoft: '#73889b',
        blueGray: '#58c0f9',
      },
      boxShadow: {
        premium: '0 10px 40px rgba(56, 45, 30, 0.08)',
      },
      fontFamily: {
        sans: [
          'Gotham',
          'Gotham Book',
          'Gotham Medium',
          'Gotham Bold',
          'Montserrat',
          'Avenir Next',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

