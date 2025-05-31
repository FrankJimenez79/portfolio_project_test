import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio_project_test/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
