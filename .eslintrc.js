module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
