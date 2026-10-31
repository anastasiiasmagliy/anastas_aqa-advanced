import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],

        plugins: { js },

        extends: ['js/recommended'],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'no-console': 'off',
            'no-debugger': 'warn',
            'no-unreachable': 'error',
            'no-constant-condition': 'warn',
            'no-cond-assign': 'error',
            'no-duplicate-imports': 'error',
            'no-var': 'error',
            'prefer-const': 'warn',
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'consistent-return': 'warn',
            'no-else-return': 'warn',
        },
    },
]);