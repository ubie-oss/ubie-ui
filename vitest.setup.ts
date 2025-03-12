import '@testing-library/jest-dom/vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview';

setProjectAnnotations(globalStorybookConfig);

global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};
