import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          lg: {
            max: "1440px",
          },
          xl: {
            max: "1440px",
          },
          md: {
            max: "1440px",
          },
          "2xl": {
            max: "1400px",
          },
        },
        padding: "16px",
      },
      colors: {
        primary: "#ffde00",
        secondary: "#36352f",
        white: "#ffffff",
        grey: "#a7a9ac",
      },
    },
  },
  plugins: [],
};
export default config;
