export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-unused-vars": "warning",
      "no-undef": "warning"
    }
  }
];