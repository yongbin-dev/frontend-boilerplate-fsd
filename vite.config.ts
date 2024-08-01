import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  define: {
    global: {},
  },
  server: {
    proxy: {
      "/guide-chart": {
        target: "https://echarts.apache.org",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/guide-chart/,
            "/examples/data/asset/data/aqi-beijing.json"
          ),
      },
    },
  },
});
