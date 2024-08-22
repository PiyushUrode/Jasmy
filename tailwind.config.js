/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {



        'custom-gradient': ' linear-gradient(148deg, rgba(255,255,255,1) 0%, rgba(3,0,255,1) 50%, rgba(3,0,255,1) 75%, rgba(3,0,255,1) 100%);',
        'presalebg': '#002849',
        'presalebg2': '#0342746E'
      },
    },
  },
  plugins: [],
}