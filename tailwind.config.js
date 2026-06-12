/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'olive-dark': '#18231D',
        olive: '#314733',
        'olive-soft': '#6E7A61',
        beige: '#EAE1D4',
        sand: '#D8CBB9',
        'warm-white': '#F7F2EA',
        ink: '#11140F',
        bordeaux: '#314733',
        terracotta: '#6E7A61',
        sabbia: '#EAE1D4',
        ivory: '#F7F2EA',
        mist: '#EFE7DC',
        sage: '#314733',
        graphite: '#11140F',
        bronze: '#A99163',
        'bronze-light': '#D2BF91',
        taupe: '#928778',
        clay: '#5E604C',
        espresso: '#0D100C',
        body: '#4E504A',
      },
      fontFamily: {
        serif: ['Vermiglione', 'Georgia', 'serif'],
        ui: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Vermiglione', 'Georgia', 'serif'],
        body: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 90px rgba(17, 20, 15, 0.10)',
        editorial: '0 42px 120px rgba(13, 16, 12, 0.18)',
      },
    },
  },
  plugins: [],
};
