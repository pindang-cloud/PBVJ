/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["LuloFont", "sans-serif"], // Jangan lupa menyertakan fallback font
      },
    },
  },
  plugins: [],
};
