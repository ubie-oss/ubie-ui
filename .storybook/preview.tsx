import '@ubie/design-tokens/dist/tokens.css';
import { Preview } from '@storybook/react';
// @ts-ignore
import { resetCss, ResetCssDecorator } from './decorators/ResetCssDecorator';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];

const preview: Preview = {
  globalTypes: {
    resetCss: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Reset CSS',
        icon: 'markup',
        items: [resetCss.nothing, resetCss.modernCss],
      },
    },
  },
  decorators: [
    (story, context) => {
      const applyResetCss = context.globals.resetCss || resetCss.nothing;

      return <ResetCssDecorator applyResetCss={applyResetCss}>{story()}</ResetCssDecorator>;
    },
  ],
};

export default preview;
