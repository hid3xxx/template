import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': tsEsLintPlugin,
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parser: tsEsLintParser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      ...tsEsLintPlugin.configs['eslint-recommended'].rules,
      ...tsEsLintPlugin.configs['recommended-type-checked'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-image-element': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
