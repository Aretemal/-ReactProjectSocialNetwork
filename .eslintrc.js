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
    'linebreak-style': 0,
    'require-jsdoc': 0,
    'no-plusplus': 0,
    'default-param-last': 0,
    // 'react/destructuring-assignment': 0,
    'react/button-has-type': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-no-useless-fragment': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
  },
};
