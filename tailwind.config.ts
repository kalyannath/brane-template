import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#7738DD",
            sideBarIconsColor: "#F9F5FF",
            bodyBackground: "#0E051A",
            activeItemBackground: "#AC95D1",
            titleColor: "#F9F5FF",
            background2: "#21182B",
            background3: "#35008B",
            borderColor1: "#AC95D1",
            contentIconsColor: "#DBC5FD",
            labelColor: "#A270F2",
            cardHeadingColor: "#BD98F9",
            cardBodyBackground: "#7738DD",
          },
        },

        "light": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#FFFFFF",
            foreground: "#35008B",
            bodyBackground: "#F5FBFF",
            sideBarIconsColor: "#F5FBFF",
            activeItemBackground: "#AC95D1",
            titleColor: "black",
            background2: "white",
            background3: "#FBF8FF",
            borderColor1: "#AC95D1",
            contentIconsColor: "#35008B",
            labelColor: "#AC95D1",
            cardHeadingColor: "#7738DD",
            cardBodyBackground: "#DBC5FD",
          },
        },
      },
    }),
  ],
};
export default config;
