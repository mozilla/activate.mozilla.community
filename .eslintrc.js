module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["standard", "react", "jsx-a11y", "only-warn"],
  rules: {
    "react/prop-types": 0,
    "react/display-name": 0,
    "no-var": "error" // optional, recommended when using es6+
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8 // optional, recommended 6+
  }
};
