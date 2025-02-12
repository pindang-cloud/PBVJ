/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["LuloFont", "sans-serif"], // Jangan lupa menyertakan fallback font
      },
      colors: {
        brown: {
          500: "#A0522D",
        },
      },
    },
    screens: {
      sm: "320px", // Default sm breakpoint
      md: "768px", // Default md breakpoint
      lg: "1024px", // Default lg breakpoint
      xl: "1280px", // Default xl breakpoint
      xls: "1536px", // Default 2xl breakpoint

      // Menambahkan custom screen breakpoints
      xs: "480px", // Kustom untuk extra small screen
      xxl: "1600px", // Kustom untuk lebih besar dari 2xl
    },
  },
  plugins: [],
};
