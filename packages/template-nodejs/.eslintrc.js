'use strict';
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:node/recommended',
  ],
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'sort-imports': 'off',
  },
};
