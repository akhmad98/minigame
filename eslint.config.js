import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    linterOptions: {
        noInlineConfig: true,
    },
    plugins: {
        unicorn: eslintPluginUnicorn,
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        ...eslintPluginUnicorn.configs['flat/recommended'].rules,
    },
  },
  eslintConfigPrettier
);
