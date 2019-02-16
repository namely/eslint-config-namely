module.exports = {
  plugins: ['promise'],
  extends: ['plugin:promise/recommended'],
  rules: {
    'promise/always-return': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/no-native': 'off',
    'promise/no-promise-in-callback': 'off',
    'promise/param-names': 'error',
    'promise/valid-params': 'off',
  },
};
