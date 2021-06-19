const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.tsx', 'components/**/*.tsx'],
  darkMode: false,
  theme: {
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
