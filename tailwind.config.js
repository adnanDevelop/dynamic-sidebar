/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        raisone: ["Raisonne", "sans-serif"],
      },
      colors: {
        "light-white": "#F9F9F9",
        "sky-blue": "#587DBD",
        "deep-blue": "#130185",
        "light-blue": "#1F73B7",
        purple: "#110C31",
      },
    },
  },
  plugins: [],
};
