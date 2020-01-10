'use strict';
module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/sort': 'warn',
    'sort-imports': 'off',
  },
};
