import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react-vite',
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: true,
  },
};
export default config;
