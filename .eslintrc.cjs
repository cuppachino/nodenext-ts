module.exports = {
  root: true,
  extends: ['@cuppachino/eslint-config'],
  rules: {},
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.eslint.json']
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.eslint.json']
      }
    }
  }
}
