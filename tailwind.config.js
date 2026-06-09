/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fbf8f1',
        mist: '#eef0e8',
        sage: '#566b57',
        graphite: '#28241f',
        bronze: '#a5825a',
        'bronze-light': '#d9bd92',
      },
      fontFamily: {
        serif: ['Vermiglione', 'Georgia', 'serif'],
        ui: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Vermiglione', 'Georgia', 'serif'],
        body: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(42, 36, 29, 0.12)',
      },
    },
  },
  plugins: [],
};
