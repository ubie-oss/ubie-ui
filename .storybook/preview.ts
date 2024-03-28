import '@ubie/design-tokens/dist/tokens.css';
import type { Parameters, Decorator } from '@storybook/react';
import { withScreenshot, isScreenshot } from 'storycap';

export const decorators: Decorator[] = [
  // https://github.com/reg-viz/storycap/issues/810
  withScreenshot(),
  // https://github.com/reg-viz/storycap/issues/464
  (StoryFn) => {
    if (isScreenshot()) {
      function addStyle(styleString: string) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
      }
      addStyle(`
          *,
          *::before,
          *::after {
            transition: none !important;
            animation: none !important;
          }
          input {
            caret-color: transparent !important;
          }
        `);
    }
    return StoryFn();
  },
];

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  screenshot: {
    // TODO: スクリーンしショットをしたいデバイスがあれば指定する
    // viewport: 'iPhone X',
  },
};
