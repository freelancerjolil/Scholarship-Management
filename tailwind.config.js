/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0057D9', // Larksuite-style blue for primary actions
        secondary: '#FEC900', // Bright yellow for secondary accents
        neutral: '#333333', // Darker neutral for text
        background: '#F5F7FA', // Soft off-white for backgrounds
        accent: '#1890FF', // Light blue for highlights and accents
        info: '#36CFC9', // Teal for informational elements
        success: '#52C41A', // Green for success actions
        warning: '#FAAD14', // Orange for warnings
        error: '#FF4D4F', // Red for errors
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font for readability
        heading: ['Poppins', 'sans-serif'], // Clean font for headings
      },
      width: {
        'desktop-md': '80vw', // Custom width for medium desktop layouts
        'desktop-lg': '70vw', // Custom width for large desktop layouts
        'desktop-xl': '60vw', // Custom width for extra-large desktop layouts
      },
      screens: {
        '2xl': '1536px', // Large screens for finer control
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        larksuite: {
          primary: '#0057D9',
          secondary: '#FEC900',
          accent: '#1890FF',
          neutral: '#333333',
          'base-100': '#F5F7FA',
          info: '#36CFC9',
          success: '#52C41A',
          warning: '#FAAD14',
          error: '#FF4D4F',
        },
      },
    ],
  },
};
