module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
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
  },
};
