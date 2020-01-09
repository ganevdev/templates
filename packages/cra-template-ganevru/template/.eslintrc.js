'use strict';
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'simple-import-sort',
    'prettier',
  ],
  root: true,
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/sort': 'warn',
    'sort-imports': 'off',
    'no-console': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};