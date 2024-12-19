import { describe, it, expect } from 'vitest';
import { opacityToClassName, colorVariable, widthVariables } from './style';

describe('opacityToClassName', () => {
  it('should return normalOverlay when opacity is normal', () => {
    expect(opacityToClassName('normal')).toBe('normalOverlay');
  });

  it('should return darkerOverlay when opacity is darker', () => {
    expect(opacityToClassName('darker')).toBe('darkerOverlay');
  });
});

describe('colorVariable', () => {
  // 名前も正確性を保つ形に修正
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
  it('should return blue color variable', () => {
    expect(colorVariable('blue')).toStrictEqual({
      '--text-color': 'var(--color-text-blue)',
    });
  });
  it('should return accent pink darken color variable', () => {
    expect(colorVariable('pinkDarken')).toStrictEqual({
      '--text-color': 'var(--color-text-pink-darken)',
    });
  });
  it('should return link sub text color variable', () => {
    expect(colorVariable('linkSub')).toStrictEqual({
      '--text-color': 'var(--color-text-link-sub)',
    });
  });
});

describe('widthVariables', () => {
  it('should return default width values', () => {
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
