module.exports = {
  settings: {
    react: {
      version: '16.7',
    }
  },
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
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/heading-has-content": 0,
    "no-var": "error", // optional, recommended when using es6+
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
          "every": [ "id" ]
      }
    }]
  },
  globals: {
    fetch: false,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8 // optional, recommended 6+
  }
};
