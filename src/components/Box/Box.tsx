'use client';

import clsx from 'clsx';
import styles from './Box.module.css';
import {
  backgroundColorVariable,
  borderVariables,
  colorVariable,
  cssFontSizeToken,
  cssLeadingToken,
  marginVariables,
  paddingVariables,
  radiusVariables,
  widthVariables,
} from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import type { CustomDataAttributeProps } from '../../types/attributes';
import type {
  BackgroundColorVariant,
  BodyFontSize,
  BodyLeading,
  BorderVariant,
  MarginProps,
  PaddingProps,
  RadiusProp,
  TextColorVariant,
  TextType,
  WidthProps,
} from '../../types/style';
import type { CSSProperties, FC, ReactNode } from 'react';

type Width = WidthProps['width'];

type BaseProps = {
  /**
   * Box内に表示するコンテンツやコンポーネント
   */
  children?: ReactNode;
  /**
   * レンダリングされるHTML要素
   * @default div
   */
  as?: HTMLTagname;
  /**
   * 背景色
   */
  backgroundColor?: BackgroundColorVariant;
  /**
   * ボーダーの種類
   */
  border?: BorderVariant;
  /**
   * 幅を指定。fullは後方互換のため残している
   * @default 'auto'
   */
  width?: 'full' | Width;
  /**
   * 内包するテキストをボールドとするかどうか。指定しない場合は親要素のスタイルを継承、trueでボールド、falseとするとnormal
   */
  textBold?: boolean;
  /**
   * 文字色の抽象値
   */
  textColor?: TextColorVariant;
  /**
   * テキストの配置。指定しない場合、親要素の配置を継承
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * 領域が狭い場合でも、テキストを折り返えさない
   */
  textNoWrap?: boolean;
  /**
   * inline-blockとして扱う
   */
  inline?: boolean;
} & PaddingProps &
  MarginProps &
  RadiusProp &
  Omit<WidthProps, 'width'> &
  CustomDataAttributeProps;

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
    }): CSSProperties => {
  if (type == null) return {};

  const size = _size == null ? 'md' : _size;
  const leading = _leading == null ? 'default' : _leading;

  switch (type) {
    case 'body':
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

export const Box: FC<PropsWithoutText | PropsWithTextBody> = ({
  as: BoxComponent = 'div',
  children,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  radius,
  backgroundColor,
  border,
  width: _width,
  minWidth,
  maxWidth,
  inline = false,
  textType,
  textSize,
  textLeading,
  textColor,
  textBold,
  textAlign,
  textNoWrap,
  ...props
}) => {
  let _textVariables: CSSProperties = {};

  if (textType === 'body') {
    _textVariables = textStyleVariables({ type: textType, size: textSize, leading: textLeading });
  }

  const width = _width === 'full' ? '100%' : _width;

  return (
    <BoxComponent
      className={clsx([
        styles.box,
        width && styles.widthFull,
        inline && styles.inline,
        textBold && styles.textBold,
        textBold === false && styles.textNormal,
        textAlign && styles[`text${capitalize(textAlign)}`],
        textNoWrap && styles.textNoWrap,
      ])}
      style={{
        ...paddingVariables({
          p,
          px,
          py,
          pt,
          pr,
          pb,
          pl,
        }),
        ...marginVariables({
          m,
          mx,
          my,
          mt,
          mr,
          mb,
          ml,
        }),
        ...radiusVariables(radius),
        ..._textVariables,
        ...colorVariable(textColor),
        ...borderVariables(border),
        ...backgroundColorVariable(backgroundColor),
        ...widthVariables({
          width,
          minWidth,
          maxWidth,
        }),
      }}
      {...props}
    >
      {children}
    </BoxComponent>
  );
};
