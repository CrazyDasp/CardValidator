module.exports = [
  {
    files: ["src/**/*.js"],
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
    },
    languageOptions: {
      sourceType: "module",
    },
    ignores: [
      "dist/**",
      "coverage/**",
      "doc/**",   
      "webpack.*.js",
    ],
  },
];
