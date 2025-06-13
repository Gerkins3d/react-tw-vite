import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // Поддержка React
    tailwindcss(), // Интеграция Tailwind
  ],
  server: {
    port: 3000,
    open: true,
  },
});
