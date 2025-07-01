import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración para producción en Vercel
export default defineConfig({
  plugins: [react()],
  base: "./", // Importante para que funcione correctamente en rutas relativas
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
