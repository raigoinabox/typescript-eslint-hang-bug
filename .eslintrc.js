module.exports = {
  extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
};
