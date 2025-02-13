/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5F6FFF',
        'whitec': '#FFFFFF',
        'blackc': '#000000',
        'text1': '#1F2937',
        'text2': '#4B5563',
      },
    },
  },
  plugins: [],
}