module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/plugin-flowtype.js',
    './rules/plugin-import.js',
    './rules/plugin-jest.js',
    './rules/plugin-jsx-a11y.js',
    './rules/plugin-promise.js',
    './rules/plugin-react.js',
    './rules/style.js',
  ],
};
