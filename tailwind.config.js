/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono :['Monaco','monospace'],
        DM :['DM Sans', 'sans-serif'],
        Montserrat :['Montserrat', 'sans-serif'],
        Rethink :['Rethink Sans', 'sans-serif'],
        Roboto :['Roboto', "sans-serif"]
      },
    },
  },
  plugins: [],
};
