module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/consistent-test-it': ['warn', { fn: 'test' }],
    'jest/expect-expect': 'off',
    'jest/no-export': 'error',
  },
  // https://github.com/jest-community/eslint-plugin-jest/issues/686#issuecomment-739151588
  settings: {
    jest: {
      version: 'latest',
    },
  },
};
