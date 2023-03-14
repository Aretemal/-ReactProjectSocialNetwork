module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-base',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react','jest'
  ],
  rules: {
    'react/prop-types': 0,
    'max-len': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'default-param-last': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'class-methods-use-this': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-debugger': 0,
  },
};
