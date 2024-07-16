module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'react-native', 'flowtype', 'prettier'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types if you use TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with new React versions
    'prettier/prettier': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
