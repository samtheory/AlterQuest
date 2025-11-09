/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind processes your CSS and generates utility classes
    tailwindcss: {},
    // Autoprefixer adds vendor prefixes for browser compatibility
    autoprefixer: {},
  },
};

export default config;
