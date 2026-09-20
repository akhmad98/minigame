import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
        unicorn: eslintPluginUnicorn,
    },
    rules: {
         ...eslintPluginUnicorn.configs['flat/recommended'].rules,
         'unicorn/prevent-abbreviations': 'off',
         'unicorn/no-useless-template-literals': 'off',
    }
  },
  {
    files: ['src/**/*.{ts,js}', 'pages/**/*.{ts,js}', 'components/**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
      },
    },
    linterOptions: {
        noInlineConfig: true,
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['*.config.js', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {

    }
  },
  eslintConfigPrettier
);
