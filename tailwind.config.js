/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        customBackground: '#FAF089',
        textPrimary: '#22543D',
        primary: '#48BB78',
        secondary: '#FC8181',
        // customBackground: '#D1FAE5',
        // textPrimary: '#2F855A',
        // primary: '#38B2AC',
        customDark: '#383335',
        customWhite: '#fff',
      },
      fontFamily: {
        customPrimary: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
};
