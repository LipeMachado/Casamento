import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral": {
          "black": "#2B1105",
          "neutral1": "#4A473B",
          "white": "#FCF9F7"
        },
        "brand": {
          "primary": "#C6754D",
          "secondary": "#97917A"
        }
      }
    },
  },
  plugins: [],
};
export default config;
