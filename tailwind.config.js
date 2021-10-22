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
        secondaryDark: colors.red[600],
        pink: colors.red[100],
        lightBlue: colors.sky[400],
        primary: colors.sky[600],
        primaryDark: colors.sky[700],
        tertiary: colors.indigo[400],
        tertiaryDark: colors.indigo[500],
        lightGray: colors.coolGray[50],
        darkGray: colors.coolGray[400],
        black: colors.trueGray[900],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
