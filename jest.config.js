import { createDefaultEsmPreset } from "ts-jest";

const preset = createDefaultEsmPreset();

export default {
  ...preset,
  testEnvironment: "node",
  detectOpenHandles: true,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
