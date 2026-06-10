/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bordeaux: '#7C3233',
        terracotta: '#A74E49',
        sabbia: '#F1E9E0',
        ivory: '#F1E9E0',
        mist: '#F7F0E8',
        sage: '#7C3233',
        graphite: '#4C4A4B',
        bronze: '#A74E49',
        'bronze-light': '#E8B7A8',
        taupe: '#AB998D',
        body: '#676767',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        ui: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Lora', 'Georgia', 'serif'],
        body: ['"Open Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(76, 74, 75, 0.10)',
      },
    },
  },
  plugins: [],
};
