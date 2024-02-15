import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.unshift({
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      });
    }
    if (config.resolve?.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    }
    return config;
  },
};
export default config;
