import type { Config } from "tailwindcss";

const config: Config = {
  // Tell Tailwind to scan these files for class names
  // It will only generate CSS for classes that are actually used
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // All component files in src
  ],
  theme: {
    extend: {
      // You can extend the default theme here
      // For now, we'll keep it empty and let shadcn add what it needs
    },
  },
  plugins: [],
};

export default config;
