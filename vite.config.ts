import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build for ICDSoft shared hosting (upload dist/ to public_html).
// base "./" keeps asset URLs relative so the site also works from a subfolder.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
});
