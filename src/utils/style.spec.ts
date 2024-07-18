import { describe, it, expect } from 'vitest';
import { opacityToClassName, colorVariable, widthVariables } from './style';

describe('opacityToClassName', () => {
  it('shuold return normalOverlay when opacity is normal', () => {
    expect(opacityToClassName('normal')).toBe('normalOverlay');
  });

  it('shuold return darkerOverlay when opacity is darker', () => {
    expect(opacityToClassName('darker')).toBe('darkerOverlay');
  });
});

describe('craeteTextColorVariable', () => {
  it('should return main text color variable', () => {
    expect(colorVariable('main')).toStrictEqual({
      '--text-color': 'var(--color-text-main)',
    });
  });
  it('should return sub text color variable', () => {
    expect(colorVariable('sub')).toStrictEqual({
      '--text-color': 'var(--color-text-sub)',
    });
  });
  it('should return primary color variable', () => {
    expect(colorVariable('primary')).toStrictEqual({
      '--text-color': 'var(--color-primary)',
    });
  });
  it('should return accent color variable', () => {
    expect(colorVariable('accent')).toStrictEqual({
      '--text-color': 'var(--color-accent)',
    });
  });
  it('should return alert color variable', () => {
    expect(colorVariable('alert')).toStrictEqual({
      '--text-color': 'var(--color-alert)',
    });
  });
  it('should return link sub text color variable', () => {
    expect(colorVariable('linkSub')).toStrictEqual({
      '--text-color': 'var(--color-text-link-sub)',
    });
  });
});

describe('widthVariables', () => {
  it('should return default values', () => {
    const variables = widthVariables({});

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(variables['--width']).toStrictEqual('auto');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(variables['--max-width']).toStrictEqual('none');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(variables['--min-width']).toStrictEqual('auto');
  });
});
