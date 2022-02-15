import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { name, version } from "./package.json";

export default defineConfig({
  define: {
    pkgJson: { name, version },
  },
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx, css } from '@emotion/react'`,
  },
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  })],
  server: {
    open: true,
    port: 3033
  },
});
