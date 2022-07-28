/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        // Primary Color
        "Primary-dark": "#17254d",
        "Primary-light": "#f1f3fa",
        // Secondary Color
        "Secondary-dark": "#f79f9b",
        "Secondary-light": "#fef4f4",
        // Dark Color
        Dark: "#0d1c38",
        "Gray-3": "#515a66",
        "Gray-2": "#798193",
        "Gray-1": "#acb4c1",
        "Blue-3": "#9eb2d9",
        "Blue-2": "#d9e0f2",
        "Blue-1": "#f0f4fb",

        // Status Color
        "Blue-havy": "#70b3e2",
        "Blue-light": "#e6f4fc",
        "Green-havy": "#76c9b1",
        "Green-light": "#dbefec",
        "Yellow-havy": "#fec76f",
        "Yellow-light": "#fef7e5",
        "Pink-havy": "#f498bd",
        "Pink-light": "#fdeef4",
        "Star-light": "#fac5c3",
      },
    },
  },
  plugins: [],
};
