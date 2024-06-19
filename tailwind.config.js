/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      colors: {
        'marineBlue': '#02295a',
        'purplishBlue': '#473dff',
        'pastelBlue': '#adbeff',
        'lightBlue': '#bfe2fd',
        'strawberryRed': '#ed3548',
        'coolGray': '#9699ab',
        'lightGray': '#d6d9e6',
        'magnolia': '#f0f6ff',
        'alabaster': '#fafbff',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

