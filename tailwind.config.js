const scrollbar = require('tailwind-scrollbar');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './src/renderer/*.tsx',
    './src/renderer/**/*.tsx',
    './src/renderer/*.ejs',
    './src/renderer/**/*.ejs',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },
    screens: {
      mobile: '400px',
      small: '640px',
      medium: '768px',
      large: '1024px',
      extraLarge: '1440px',
      largest: '1680px',
    },
    fontFamily: {
      fira: ['"Fira Code"', 'Arial', 'sans-serif'],
    },
  },
  plugins: [scrollbar, typography],
};
