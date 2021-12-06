module.exports = {
  extends: ['prettier'],
  rules: {
    'func-names': 'error',
    'linebreak-style': 'off',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'new-cap': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
  },
};
