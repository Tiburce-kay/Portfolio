// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // D'autres extensions de thème ici...
      fontFamily: {
        // Redéfinit la police par défaut de Tailwind pour utiliser une police monospace
        sans: ['"Roboto Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
