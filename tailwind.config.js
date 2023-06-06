/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Open Sans', 'sans-serif'],
        cherryBomb: ['Cherry Bomb One', 'cursive'],
        bebasNue: ['Bebas Neue', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        questrial: ['Questrial', 'sans-serif']
      },
    },
  },
  plugins: [
  ],
}