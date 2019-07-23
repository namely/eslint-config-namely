module.exports = {
  extends: ['prettier', 'prettier/react'],
  rules: {
    'func-names': 'error',
    'linebreak-style': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'new-cap': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
};
