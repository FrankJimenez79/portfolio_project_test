import { defineConfig } from "vite";

export default defineConfig({
  base: "/porfolio_project_test/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
