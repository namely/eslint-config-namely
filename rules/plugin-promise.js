module.exports = {
  plugins: ['promise'],
  extends: ['plugin:promise/recommended'],
  rules: {
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/param-names': 'error',
  },
};
