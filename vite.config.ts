import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("react-tsparticles")) {
            return "particles";
          }

          if (id.includes("bootstrap") || id.includes("react-bootstrap")) {
            return "bootstrap";
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
