/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  endOfLine: "lf",
  plugins: [require.resolve("prettier-plugin-tailwindcss")]
};

module.exports = config;
