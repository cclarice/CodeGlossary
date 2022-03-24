/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue', 'html'],
  rules: {
    eqeqeq: 1,
    curly: 1,
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'max-len': ['warn', { code: 120 }],
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: true,
      exceptions: { ImportDeclaration: true, VariableDeclarator: true, Property: true }
    }]
  }
}
