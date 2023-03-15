export default {
  preset: "ts-jest",
  // match only files with .test.ts or .spec.ts extension
  testRegex: "\\.(test|spec)\\.ts$",
  testPathIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "(.+)\\.js": ["$1.js", "$1.ts"],
  },
};
