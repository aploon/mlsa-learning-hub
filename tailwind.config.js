/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: { ms: { DEFAULT: "#0067b8", dark: "#005da6", light: "#4da3e0" } },
      fontFamily: { sans: ["Segoe UI", "Segoe UI Web", "system-ui", "-apple-system", "sans-serif"] },
    },
  },
  plugins: [],
};
