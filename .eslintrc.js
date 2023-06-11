module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        "project": "tsconfig.json",
        "sourceType": "module"
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/no-namespace': 'off',
      },
    },
    {
      files: [
        '**/.eslintrc.js',
        '**/babel.config.js',
        '**/webpack.config.js',
      ],
      env: {node: true},
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
