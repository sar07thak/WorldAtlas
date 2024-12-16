/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-large': '0px 48px 100px 0px rgba(168, 163, 184, 0.15)',
      },
    },
  },
  plugins: [],
}