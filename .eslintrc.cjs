/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-prettier/skip-formatting',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }]
    }
};
