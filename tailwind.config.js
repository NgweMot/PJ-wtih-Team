/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '721px'},
      // => @media (max-width: 721px) { ... }

      'md':{'max': '992px'},
      // => @media (max-width: 992px) { ... }

      'lg': '1020px',
      // => @media (min-width: 1020px) { ... }

      'xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1920px'},
      // => @media (max-width: 1920px) { ... }
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono :['Monaco','monospace'],
      DM :['DM Sans', 'sans-serif'],
      Montserrat :['Montserrat', 'sans-serif'],
      Rethink :['Rethink Sans', 'sans-serif'],
      Roboto :['Roboto', "sans-serif"]
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
