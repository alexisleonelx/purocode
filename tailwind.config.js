/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#FCF932",
      second: "#3475D7",
      complement: "#FFFFFF",
      complement2: "#777777c7",
      new: "#242424",
      new2: "#f33b4a",
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
      ser: ["Awesome", "serif"],
    },
  },
  plugins: [],
};
