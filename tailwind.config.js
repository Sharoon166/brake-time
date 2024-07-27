import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13834B",
        secondary: "#252525",
        grey: "#8F94A0",
        lightGrey: "#E6EBF2",
      },
    },
  },
  plugins: [require("daisyui"), nextui()],
  daisyui: {
    themes: ["light", "dark"],
  },
};
