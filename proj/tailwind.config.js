/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4869e8",
        "background-light": "#f7f8fa",
        "background-dark": "#171d2b",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
