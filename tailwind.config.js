/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#F2F2F2",
        accent: "#FFC107",
      },
      fontFamily: {
        sfpro: ["SF Pro Display", "sans-serif"],
      },
      screens: {
        // 'sm': '640px',
        // // => @media (min-width: 640px) { ... }
        // 'md': '768px',
        // // => @media (min-width: 768px) { ... }
        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
        // '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
