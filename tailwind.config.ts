import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'honeydew': '#F1FAEE',
        'engviolet': '#51344D',
        'eggplant': '#6F5060',
        'cinerous': '#A78682',
        'midgreen': '#124559'
      }
    },
  },
  plugins: [],
} satisfies Config;
