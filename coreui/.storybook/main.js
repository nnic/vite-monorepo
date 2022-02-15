const react = require("@vitejs/plugin-react");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {

    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react"))
    );

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      })
    );

    return {
      ...config,
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
      rollupOptions: {
        ...config.rollupOptions,
        // Externalize deps that shouldn't be bundled
        external: ["react", "react-dom"],
        output: {
          // Global vars to use in UMD build for externalized deps
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    };
  },
};
