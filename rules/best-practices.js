module.exports = {
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'componentDidCatch',
          'componentDidMount',
          'componentDidUpdate',
          'componentWillMount',
          'componentWillReceiveProps',
          'componentWillUnmount',
          'componentWillUpdate',
          'getChildContext',
          'getDefaultProps',
          'getInitialState',
          'render',
          'shouldComponentUpdate',
        ],
      },
    ],
    'no-implicit-coercion': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'moment',
            message: 'Please use date-fns instead.',
          },
        ],
      },
    ],
    'no-use-before-define': 'off',
    'no-var': 'error',
  },
};
