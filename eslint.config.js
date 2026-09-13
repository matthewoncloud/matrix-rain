export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];