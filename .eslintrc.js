module.exports = {
  env: {
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    allowImportExportEverywhere: true
  },
  rules: {
     // Common
     "import/no-unresolved": 0,
     'no-console': 0,
     'no-extra-boolean-cast': 0,
     'no-lonely-if': 1,
     'no-unused-vars': 1,
     'no-trailing-spaces': 1,
     'no-multi-spaces': 1,
     'no-multiple-empty-lines': 1,
     'space-before-blocks': ['error', 'always'],
     'object-curly-spacing': [1, 'never'],
     'indent': ['warn', 2],
     'semi': [1, 'always'],
     'quotes': ['error', 'single'],
     'array-bracket-spacing': 1,
     'linebreak-style': 0,
     'no-unexpected-multiline': 'warn',
     'keyword-spacing': 1,
     'comma-dangle': 1,
     'comma-spacing': 1,
     'arrow-spacing': 1,
     'dot-comma': 0
  },
};
