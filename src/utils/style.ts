import DesignTokens from '@ubie/design-tokens';
import type { Spacing, Radius } from '../types/style';
import type { CSSProperties } from 'react';

export type Opacity = 'normal' | 'darker';
export const opacityToClassName = (opacity: Opacity) => {
  switch (opacity) {
    case 'normal':
      return 'normalOverlay';
    case 'darker':
      return 'darkerOverlay';
  }
};

const createSpacingVariableFromKey = (key: Spacing) => {
  return `var(--${DesignTokens.size[`spacing-${key}`].path.join('-')})`;
};

const createRadiusVariableFromKey = (key: Radius) => {
  return `var(--${DesignTokens.radius[key].path.join('-')})`;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const paddingVariables = ({ pt, pr, pb, pl }: { pt?: Spacing; pr?: Spacing; pb?: Spacing; pl?: Spacing }) => {
  return {
    '--padding-top': pt ? createSpacingVariableFromKey(pt) : '0',
    '--padding-right': pr ? createSpacingVariableFromKey(pr) : '0',
    '--padding-bottom': pb ? createSpacingVariableFromKey(pb) : '0',
    '--padding-left': pl ? createSpacingVariableFromKey(pl) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const marginVariables = ({ mt, mr, mb, ml }: { mt?: Spacing; mr?: Spacing; mb?: Spacing; ml?: Spacing }) => {
  return {
    '--margin-top': mt ? createSpacingVariableFromKey(mt) : '0',
    '--margin-right': mr ? createSpacingVariableFromKey(mr) : '0',
    '--margin-bottom': mb ? createSpacingVariableFromKey(mb) : '0',
    '--margin-left': ml ? createSpacingVariableFromKey(ml) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const radiusVariables = (radius?: Radius) => {
  return {
    '--radius': radius ? createRadiusVariableFromKey(radius) : '0',
  } as CSSProperties;
};
