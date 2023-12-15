import type { Config } from "jest";

const config: Config = {
  moduleFileExtensions: ["web.js", "js", "jsx", "ts", "tsx", "node"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        useESM: true,
        isolatedModules: true,
        diagnostics: false,
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
};

export default config;
