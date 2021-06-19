const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.tsx', 'components/**/*.tsx'],
  darkMode: false,
  theme: {
    boxShadow: {
      none: 'none',
      sm: '0 0.125rem 0.25rem rgba(0,0,0,0.075)',
      DEFAULT: '0 0.5rem 1rem rgba(0,0,0,0.15)',
      lg: '0 1rem 3rem rgba(0,0,0,0.175)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms],
};
