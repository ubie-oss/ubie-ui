import { describe, it, expect } from 'vitest';
import { opacityToClassName } from './style';

describe('opacityToClassName', () => {
  it('shuold return normalOverlay when opacity is normal', () => {
    expect(opacityToClassName('normal')).toBe('normalOverlay');
  });

  it('shuold return darkerOverlay when opacity is darker', () => {
    expect(opacityToClassName('darker')).toBe('darkerOverlay');
  });
});
