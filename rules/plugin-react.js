module.exports = {
  plugins: ['react'],
  rules: {
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/no-multi-comp': 'off',
    'react/sort-prop-types': [
      'warn',
      {
        requiredFirst: true,
      },
    ],
  },
};
