import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan the UI package
    "../../apps/**/src/**/*.{js,ts,jsx,tsx}", // Scan all apps
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;