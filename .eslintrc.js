module.exports = {
  root: true,  
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": [2, "never"],
    "no-console": 0,
    "arrow-parens": 0
  }
}