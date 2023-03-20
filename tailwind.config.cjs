/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx,html}", "index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: "Nunito",
        heading: "",
        logo: "Tangerine",
      },
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        onyx: {
          main: "#0C0C0F",
          secondary: "#111113",
        },
        crystal: {
          main: "#EFEFFF",
          secondary: "#DBDBEC",
        },
      },
    },
  },
  plugins: [],
};
