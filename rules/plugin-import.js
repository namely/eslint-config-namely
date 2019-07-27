module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: {
    'import/extensions': [
      'warn',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/named': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      webpack: {
        config: 'webpack.config.common.js',
      },
    },
  },
};
