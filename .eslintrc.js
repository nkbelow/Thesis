// Add this file to the root directory of your project
module.exports = {
  "root": true,
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "sourceType": "script",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  // Add custom rules here
  // http://eslint.org/docs/rules/
  "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
  },
  "parser": "esprima",
  "rules": {
    "semi": "error",
    "comma-dangle": ["error", "never"]
  }
};
