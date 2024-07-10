module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    "no-extra-semi": "off",
    "vue/no-multiple-template-root": "off",
  },
};
