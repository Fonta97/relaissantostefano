/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bordeaux: '#753332',
        terracotta: '#A9584E',
        sabbia: '#E9DFD1',
        ivory: '#F4EFE7',
        mist: '#F8F3EA',
        sage: '#753332',
        graphite: '#201916',
        bronze: '#B2935B',
        'bronze-light': '#D9C49A',
        taupe: '#A9A098',
        clay: '#6F4A39',
        espresso: '#15110F',
        body: '#5F5852',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        ui: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Open Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 90px rgba(32, 25, 22, 0.12)',
        editorial: '0 42px 120px rgba(21, 17, 15, 0.22)',
      },
    },
  },
  plugins: [],
};
