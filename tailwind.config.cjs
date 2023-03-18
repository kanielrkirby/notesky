/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx,html}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: "Nunito",
        heading: "",
        logo: "",
      },
      colors: {
        primary: {
          light: "#C294EA",
          dark: "#7C6392",
        },
        secondary: {
          light: "#DC8686",
          dark: "#738DAB",
        },
        onyx: {
          main: "#0C0C0F",
          secondary: "#111113",
        },
        other: {
          main: "#EDEDF3",
          secondary: "#DBDBEC",
        },
      },
    },
  },
  plugins: [],
};