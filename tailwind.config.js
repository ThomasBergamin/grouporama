/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: colors.red[500],
        secondaryDark: colors.red[700],
        pink: colors.red[100],
        lightBlue: colors.sky[400],
        primary: colors.sky[600],
        primaryDark: colors.sky[800],
        tertiary: colors.indigo[400],
        tertiaryDark: colors.indigo[600],
        lightGray: colors.coolGray[50],
        gray: colors.coolGray[200],
        darkGray: colors.coolGray[500],
        black: colors.trueGray[900],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [require('@tailwindcss/forms')],
};
