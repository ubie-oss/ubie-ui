import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(ts|tsx))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],
  framework: '@storybook/react-vite',

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
