module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/no-export': 'error',
  },
};
