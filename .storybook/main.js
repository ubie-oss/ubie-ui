module.exports = {
  stories: ['../src'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    previewCsfV3: true,
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: true,
  },
};
