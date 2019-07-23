module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: {
    'import/extensions': ['error', 'always', { js: 'never' }],
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'webpack.config.common.js',
      },
    },
  },
};
