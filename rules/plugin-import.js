module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.common.js',
      },
    },
  },
};
