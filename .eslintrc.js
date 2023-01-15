module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'max-len': 'off',
    'linebreak-style': 0,
    'require-jsdoc': 0,
    'semi': [2, 'never'], // Отвечает за точки с запятой
  },
}
