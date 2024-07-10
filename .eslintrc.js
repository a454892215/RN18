module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
  ],
  rules: {
    'react/prop-types': 'off', // Disable prop-types if you use TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with new React versions
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
