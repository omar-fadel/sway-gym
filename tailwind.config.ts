import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "599px",
        md: "904px",
        lg: "1440px",
      },
      backgroundImage: {
        "background-1": "url('/images/group-picture-1-background.png')",
        "map-background": "url('/images/address-map.png')",
        "feel-the-beat": "url('/images/feel-the-beat-background.png')",
        "address-background-1": "url('/images/address/backgrounds/1bg.png')",
        "address-background-2": "url('/images/address/backgrounds/2bg.png')",
        "address-background-3": "url('/images/address/backgrounds/3bg.png')",
      },
      container: {
        padding: "16px",
      },
      colors: {
        primary: "#ffde00",
        secondary: "#36352f",
        white: "#ffffff",
        grey: "#a7a9ac",
        black: "#000000",
        inactiveGrey: "#605E5E",
        success: "#009933",
        error: "#cc0000",
      },
    },
  },
  plugins: [],
};
export default config;
