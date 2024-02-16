import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      backgroundImage: {
        "background-1": "url('/images/group-picture-1-background.png')",
        "map-background": "url('/images/address-map.png')",
      },
      container: {
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
