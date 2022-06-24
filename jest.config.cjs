/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "fixtures"],
};
module.exports = config;
