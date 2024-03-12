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
      fontSize: {
        h1: [
          "5em",
          {
            fontWeight: "bold",
            lineHeight: "1.5em",
          },
        ],
        h2: [
          "3em",
          {
            fontWeight: "bold",
            lineHeight: "1.2em",
          },
        ],
        h3: [
          "2em",
          {
            fontWeight: "bold",
            lineHeight: "1.3em",
          },
        ],
        h4: [
          "1.33em",
          {
            fontWeight: "bold",
            lineHeight: "1.5em",
          },
        ],
        b1: [
          "1.33em",
          {
            lineHeight: "1.7em",
          },
        ],
        b2: [
          "1.17em",
          {
            lineHeight: "1.17em",
            fontWeight: "bold",
          },
        ],
        b3: [
          "1em",
          {
            lineHeight: "1.5em",
          },
        ],
        b4: [
          "0.83em",
          {
            lineHeight: "1.5em",
          },
        ],
        button: ["1.17em", { lineHeight: "1.17em" }],
        label: ["1.17em", { lineHeight: "1.17em" }],
        tabletLabel: ["1em", { lineHeight: "1.17em" }],
        footer: ["1.17em", { lineHeight: "1.17em" }],
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
