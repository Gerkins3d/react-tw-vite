export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Поддержка JSX/TSX
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#0ea5e9",
        },
      },
    },
  },
  plugins: [],
};
