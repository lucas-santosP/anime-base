/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx,vue}",
    "./pages/**/*.{js,ts,jsx,tsx,vue}",
    "./layouts/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#42e0d2",
      },
    },
  },
  plugins: [],
};
