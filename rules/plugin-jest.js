module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/consistent-test-it': ['warn', { fn: 'test' }],
    'jest/expect-expect': 'off',
    'jest/no-export': 'error',
  },
};
