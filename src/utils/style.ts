import DesignTokens from '@ubie/design-tokens';
import type {
  Spacing,
  Radius,
  HeadingFontSize,
  TextType,
  BodyFontSize,
  BodyLeading,
  NoteFontSize,
  NoteLeading,
  ButtonFontSize,
  ButtonLeading,
  HeadingLeading,
  TagLeading,
  TextColor,
} from '../types/style';
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

export const createSpacingVariableFromKey = (key: Spacing) => {
  return `var(--${DesignTokens.size[`spacing-${key}`].path.join('-')})`;
};

const createRadiusVariableFromKey = (key: Radius) => {
  return `var(--${DesignTokens.radius[key].path.join('-')})`;
};

export const cssFontSizeToken = ({
  type,
  size,
}:
  | {
      type: Extract<TextType, 'body'>;
      size: BodyFontSize;
    }
  | {
      type: Extract<TextType, 'note'>;
      size: NoteFontSize;
    }
  | {
      type: Extract<TextType, 'heading'>;
      size: HeadingFontSize;
    }
  | {
      type: Extract<TextType, 'button'>;
      size: ButtonFontSize;
    }
  | {
      type: Extract<TextType, 'tag'>;
      size: NoteFontSize;
    }) => {
  switch (type) {
    case 'body':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'note':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'heading':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'button':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'tag':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = type;
  }

  return '';
};

export const cssLeadingToken = ({
  type,
  size,
  leading,
}:
  | {
      type: Extract<TextType, 'body'>;
      size: BodyFontSize;
      leading: BodyLeading;
    }
  | {
      type: Extract<TextType, 'note'>;
      size: NoteFontSize;
      leading: NoteLeading;
    }
  | {
      type: Extract<TextType, 'heading'>;
      size: HeadingFontSize;
      leading: HeadingLeading;
    }
  | {
      type: Extract<TextType, 'button'>;
      size: ButtonFontSize;
      leading: ButtonLeading;
    }
  | {
      type: Extract<TextType, 'tag'>;
      size: NoteFontSize;
      leading: TagLeading;
    }) => {
  switch (type) {
    case 'body':
      return leading === 'default'
        ? `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`
        : `var(--${DesignTokens.text[`${type}-${size}-${leading}-line`].path.join('-')})`;
    case 'heading':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    case 'note':
      return leading === 'default'
        ? `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`
        : `var(--${DesignTokens.text[`${type}-${size}-${leading}-line`].path.join('-')})`;
    case 'button':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    case 'tag':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = type;
  }

  return '';
};

export const colorVariable = (color: TextColor | undefined): CSSProperties => {
  if (color == null) {
    return {
      '--text-color': 'inherit',
    } as CSSProperties;
  }

  let _color = '';

  if (color === 'linkSub') {
    _color = `var(--${DesignTokens.color[`text-link-sub`].path.join('-')})`;
  } else if (color === 'primary') {
    _color = `var(--${DesignTokens.color['primary'].path.join('-')})`;
  } else if (color === 'accent') {
    _color = `var(--${DesignTokens.color['accent'].path.join('-')})`;
  } else if (color === 'alert') {
    _color = `var(--${DesignTokens.color['alert'].path.join('-')})`;
  } else {
    _color = `var(--${DesignTokens.color[`text-${color}`].path.join('-')})`;
  }

  return {
    '--text-color': _color,
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const paddingVariables = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: {
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
}) => {
  const topKey = pt ?? py ?? p;
  const rightKey = pr ?? px ?? p;
  const bottomKey = pb ?? py ?? p;
  const leftKey = pl ?? px ?? p;

  return {
    '--padding-top': topKey ? createSpacingVariableFromKey(topKey) : '0',
    '--padding-right': rightKey ? createSpacingVariableFromKey(rightKey) : '0',
    '--padding-bottom': bottomKey ? createSpacingVariableFromKey(bottomKey) : '0',
    '--padding-left': leftKey ? createSpacingVariableFromKey(leftKey) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const marginVariables = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: {
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
}) => {
  const topKey = mt ?? my ?? m;
  const rightKey = mr ?? mx ?? m;
  const bottomKey = mb ?? my ?? m;
  const leftKey = ml ?? mx ?? m;

  return {
    '--margin-top': topKey ? createSpacingVariableFromKey(topKey) : '0',
    '--margin-right': rightKey ? createSpacingVariableFromKey(rightKey) : '0',
    '--margin-bottom': bottomKey ? createSpacingVariableFromKey(bottomKey) : '0',
    '--margin-left': leftKey ? createSpacingVariableFromKey(leftKey) : '0',
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

/**
 * Accepts optional arguments to unify default values.
 */
export const gapVariables = (spacing?: Spacing) => {
  return {
    '--gap': spacing ? `var(--size-spacing-${spacing})` : '0',
  } as CSSProperties;
};
