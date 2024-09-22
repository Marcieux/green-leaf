/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        slideRight: '.4s linear slideRight',
        rotateIn: '.5s ease-in-out rotateIn',
      },
      backgroundImage: {
        'custom-bg': "url('../src/assets/products-hero.png')", // Adjust the path as needed
      },
    },
    screens: {
      'mobile': '768px',
      // => @media (min-width: 768px) { ... }

      'tablet': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}