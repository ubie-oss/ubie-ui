import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(ts|tsx))'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storycap'],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true,
  },
};
export default config;
