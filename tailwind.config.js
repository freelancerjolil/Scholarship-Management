/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008D54', // Green for primary actions
        secondary: '#FFC107', // Yellow for secondary accents
        neutral: '#212121', // Dark gray for text and neutral elements
        background: '#F9FAFB', // Light gray for backgrounds
        accent: '#4CAF50', // Blue for highlights and accents
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Main body font
        heading: ['Montserrat', 'sans-serif'], // Heading font
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#008D54',
          secondary: '#FFC107',
          accent: '#4CAF50',
          neutral: '#212121',
          'base-100': '#F9FAFB',
        },
      },
    ],
  },
};
