module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/button-has-type': 'off',
  },
};
