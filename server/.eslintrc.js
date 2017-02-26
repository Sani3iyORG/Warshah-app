module.exports = {
    "extends": "hackreactor",
     rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/
    "no-use-before-define": ["error", { "functions": false, "classes": true }]
  }
};