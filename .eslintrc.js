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
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'max-len': 'off',
    'linebreak-style': [2, 'windows'],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'default-param-last': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-debugger': 0,
    // Исправить
    'react/prefer-stateless-function': 0,
  },
};
