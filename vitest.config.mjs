import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { transformWithOxc } from "vite";

const jsxInJsPlugin = () => ({
  name: "jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    if (
      id.endsWith(".js") &&
      !id.includes("node_modules") &&
      (code.includes("</") || code.includes("/>"))
    ) {
      return transformWithOxc(code, id, { lang: "jsx", jsx: { runtime: "automatic" } });
    }
  },
});

export default defineConfig({
  plugins: [jsxInJsPlugin(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setupTests.js",
  },
});
