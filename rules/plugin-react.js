module.exports = {
  plugins: ['react'],
  rules: {
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-fragments': 'warn',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'warn',
    'react/jsx-sort-props': ['warn', { reservedFirst: false }],
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/no-multi-comp': 'off',
    'react/sort-prop-types': ['warn', { requiredFirst: true }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
};
