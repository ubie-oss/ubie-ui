import 'modern-css-reset/dist/reset.min.css';
import '@ubie/design-tokens/dist/tokens.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
