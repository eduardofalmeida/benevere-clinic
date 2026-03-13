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
        navy: '#1c344c',
        grayLight: '#d5dcdf',
        grayMedium: '#6a7785',
        graySoft: '#8494a1',
        blueGray: '#7c8cac',
      },
      boxShadow: {
        premium: '0 10px 40px rgba(56, 45, 30, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

