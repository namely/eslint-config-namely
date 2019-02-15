module.exports = {
  plugins: ['flowtype'],
  extends: ['plugin:flowtype/recommended'],
  rules: {
    'flowtype/space-after-type-colon': ['error', 'always', { allowLineBreak: true }],
  },
};
