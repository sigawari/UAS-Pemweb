/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "if-navy": "#113F67", // Warna custom
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"], // Font untuk body
        heading: ["Quicksand", "sans-serif"], // Font untuk heading
      },
    },
  },
  plugins: [],
};
