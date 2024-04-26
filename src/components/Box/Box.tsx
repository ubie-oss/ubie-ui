'use client';

import clsx from 'clsx';
import styles from './Box.module.css';
import {} from '../../types/style';
import {
  paddingVariables,
  marginVariables,
  radiusVariables,
  cssFontSizeToken,
  cssLeadingToken,
  colorVariable,
} from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import type {
  PaddingProps,
  MarginProps,
  RadiusProp,
  BackgroundColor,
  TextType,
  TextColor,
  BodyFontSize,
  BodyLeading,
  NoteFontSize,
  NoteLeading,
} from '../../types/style';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

type BaseProps = {
  /**
   * レンダリングされるHTML要素
   * @default div
   */
  as?: HTMLTagname;
  /**
   * 背景色
   */
  backgroundColor?: BackgroundColor;
  /**
   * ボーダーの種類
   */
  border?: 'gray' | 'grayThick' | 'primary' | 'primaryThick';
  /**
   * 幅を指定。他のスタイルの影響を受け、幅が100%とならない場合にのみ使用
   */
  width?: 'full';
  /**
   * 内包するテキストをボールドとするかどうか。指定しない場合は親要素のスタイルを継承、trueでボールド、falseとするとnormal
   */
  textBold?: boolean;
  /**
   * 文字色の抽象値。のかのtext系Propとは独立して指定可能
   */
  textColor?: TextColor;
} & PaddingProps &
  MarginProps &
  RadiusProp;

type PropsWithoutText = BaseProps & {
  /**
   * 配下に含むテキストの種類
   */
  textType?: undefined;
  /**
   * 配下に含むテキストのフォントサイズの抽象値。合わせてtextTypeの指定が必須で、typeに応じた値が指定可能
   */
  textSize?: never;
  /**
   * 配下に含むテキストの行送りの抽象値（`line-height`）。合わせてtextTypeとtextSizeの指定が必須で、typeに応じた値が指定可能
   */
  textLeading?: never;
};

type PropsWithTextBody = BaseProps & {
  /**
   * 配下に含むテキストの種類
   */
  textType: Extract<TextType, 'body'>;
  /**
   * 配下に含むテキストのフォントサイズの抽象値。合わせてtextTypeの指定が必須で、typeに応じた値が指定可能
   */
  textSize?: BodyFontSize;
  /**
   * 配下に含むテキストの行送りの抽象値（`line-height`）。合わせてtextTypeとtextSizeの指定が必須で、typeに応じた値が指定可能
   */
  textLeading?: BodyLeading;
};

type PropsWithTextNote = BaseProps & {
  /**
   * 配下に含むテキストの種類
   */
  textType: Extract<TextType, 'note'>;
  /**
   * 配下に含むテキストのフォントサイズの抽象値。合わせてtextTypeの指定が必須で、typeに応じた値が指定可能
   */
  textSize?: NoteFontSize;
  /**
   * 配下に含むテキストの行送りの抽象値（`line-height`）。合わせてtextTypeとtextSizeの指定が必須で、typeに応じた値が指定可能
   */
  textLeading?: NoteLeading;
};

/**
 * If type is not specified, an empty object is returned because it is unknown how it is to be styled, i.e. it is not styled.
 * If type is specified but size or leading is not, specify default values (md or default.)
 */
export const textStyleVariables = ({
  type,
  size: _size,
  leading: _leading,
}:
  | {
      type: undefined;
      size: never;
      leading: never;
    }
  | {
      type: Extract<TextType, 'body'>;
      size: BodyFontSize | undefined;
      leading: BodyLeading | undefined;
    }
  | {
      type: Extract<TextType, 'note'>;
      size: NoteFontSize | undefined;
      leading: NoteLeading | undefined;
    }): CSSProperties => {
  if (type == null) return {};

  const size = type != null && _size == null ? 'md' : _size;
  const leading = type != null && _leading == null ? 'default' : _leading;

  switch (type) {
    case 'body':
      return {
        '--text-size': size ? cssFontSizeToken({ type, size }) : 'inherit',
        '--text-leading': leading ? cssLeadingToken({ type, size: size || 'md', leading }) : 'inherit',
      } as CSSProperties;
    case 'note':
      return {
        '--text-size': size ? cssFontSizeToken({ type, size }) : 'inherit',
        '--text-leading': leading ? cssLeadingToken({ type, size: size || 'md', leading }) : 'inherit',
      } as CSSProperties;
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = type;
  }

  return {};
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Box: FC<PropsWithChildren<PropsWithoutText | PropsWithTextBody | PropsWithTextNote>> = ({
  as: BoxComponent = 'div',
  children,
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
  radius,
  backgroundColor,
  border,
  width,
  textType,
  textSize,
  textLeading,
  textColor,
  textBold,
}) => {
  let _textVariables: CSSProperties = {};

  if (textType === 'body') {
    _textVariables = textStyleVariables({ type: textType, size: textSize, leading: textLeading });
  } else if (textType === 'note') {
    _textVariables = textStyleVariables({ type: textType, size: textSize, leading: textLeading });
  }

  return (
    <BoxComponent
      className={clsx([
        styles.box,
        backgroundColor && styles[`backgroundColor${capitalize(backgroundColor)}`],
        border && styles[`border${capitalize(border)}`],
        width && styles.widthFull,
        textBold && styles.textBold,
        textBold === false && styles.textNormal,
      ])}
      style={{
        ...paddingVariables({
          pt,
          pr,
          pb,
          pl,
        }),
        ...marginVariables({
          mt,
          mr,
          mb,
          ml,
        }),
        ...radiusVariables(radius),
        ..._textVariables,
        ...colorVariable(textColor),
      }}
    >
      {children}
    </BoxComponent>
  );
};
