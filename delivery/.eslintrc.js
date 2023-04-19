module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended'
  ],
  plugins: ['simple-import-sort', 'unused-imports', 'jsx-a11y', 'react', 'eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
        endOfLine: 'auto'
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'no-unused-vars': 'off',
    'no-unsafe-optional-chaining': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'array-callback-return': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
