
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/canada/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },

  preview: {
    host: "0.0.0.0",
    allowedHosts: ["cp-canada-3.onrender.com"],
  },

  plugins: [
    react(),
    tailwindcss(),
  ],
});
