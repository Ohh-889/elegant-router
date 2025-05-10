import { defineConfig } from '@soybeanjs/eslint-config';

export default defineConfig(
  { vue: true },
  {
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index', 'App', '[id]']
        }
      ],
      'max-params': ['error', 4],
      'no-continue': 'off',
      'class-methods-use-this': 'off'
    }
  }
);
