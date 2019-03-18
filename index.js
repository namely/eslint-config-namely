const { resolve } = require;

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
    resolve('eslint-config-airbnb'),
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/plugin-flowtype.js',
    './rules/plugin-import.js',
    './rules/plugin-jest.js',
    './rules/plugin-jsx-a11y.js',
    './rules/plugin-promise.js',
    './rules/plugin-react.js',
    './rules/plugin-react-hooks.js',
    './rules/style.js',
  ],
};
