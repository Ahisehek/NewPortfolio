import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        bg: "#0F172A",
        card: "#1E293B",
        text: "#E2E8F0",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
