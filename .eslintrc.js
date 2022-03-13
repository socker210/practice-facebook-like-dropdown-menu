module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    { files: ['*.ts?(x)'], extends: ['plugin:@typescript-eslint/recommended'] },
    {
      files: ['*.tsx'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
      ],
    },
    { files: ['*.{test,spec}.ts?(x)'], extends: ['plugin:jest/recommended'] },
  ],
}
