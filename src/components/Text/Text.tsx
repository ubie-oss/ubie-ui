'use client';

import { clsx } from 'clsx';
import { cloneElement } from 'react';
import styles from './Text.module.css';
import {
  BodyFontSize,
  BodyLeading,
  HeadingFontSize,
  HeadingLeading,
  ButtonFontSize,
  ButtonLeading,
  TagFontSize,
  TagLeading,
  TextColorVariant,
} from '../../types/style';
import { fixedForwardRef } from '../../utils/component';
import { colorVariable } from '../../utils/style';
import { DistributiveOmit } from '../../utils/types';
import type { ReactNode, ElementType, ForwardedRef, ComponentPropsWithRef, ReactElement } from 'react';

type BaseProps = {
  /**
   * レンダリングされる要素を変更。フレームワークのリンクコンポーネントを想定しています
   * 指定した場合、colorがデフォルトでlinkになります
   */
  render?: ReactElement;
  /**
   * 表示するテキスト
   * pやdivなどを含めないでください（文法的にNGです）
   */
  children: ReactNode;
  /**
   * 太字とする
   */
  bold?: boolean;
  /**
   * 文字色の抽象値
   * @default main
   */
  color?: TextColorVariant;
  /**
   * HTMLのid属性
   */
  id?: string;
  /**
   * テキストの配置。指定しない場合、親要素の配置を継承
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * 領域が狭い場合でも折り返えさない
   */
  noWrap?: boolean;
};

type BodyProps = BaseProps & {
  /**
   * テキストの種類
   * @default body
   */
  type?: 'body';
  /**
   * フォントサイズの抽象値
   * @default md
   */
  size?: BodyFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   */
  leading?: BodyLeading;
};

type HeadingProps = BaseProps & {
  /**
   * テキストの種類
   */
  type: 'heading';
  /**
   * フォントサイズの抽象値
   */
  size?: HeadingFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   * @default default
   */
  leading?: HeadingLeading;
};

type ButtonProps = BaseProps & {
  /**
   * テキストの種類
   */
  type: 'button';
  /**
   * フォントサイズの抽象値
   */
  size?: ButtonFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   * @default default
   */
  leading?: ButtonLeading;
};

type TagProps = BaseProps & {
  /**
   * テキストの種類
   */
  type: 'tag';
  /**
   * フォントサイズの抽象値
   */
  size?: TagFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   * @default default
   */
  leading?: TagLeading;
};

type TextProps = BodyProps | HeadingProps | ButtonProps | TagProps;

function TextInner<T extends ElementType>(
  props: {
    /**
     * レンダリングされる要素を指定。renderとは違い、HTMLのネイティブ要素に限定
     * また、指定した要素に応じて対応する属性も合わせて使用可能に
     * @default p
     */
    as?: T;
  } & TextProps &
    DistributiveOmit<ComponentPropsWithRef<ElementType extends T ? 'p' : T>, 'as'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const {
    render,
    as: TextComponent = 'p',
    size = 'md',
    type = 'body',
    leading = 'default',
    bold = false,
    noWrap = false,
    color: _color,
    children,
    id,
    textAlign,
    ...rest
  } = props;
  const color =
    _color != null ? _color : TextComponent === 'a' || TextComponent === 'button' || render != null ? 'link' : 'main';

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    return render ? cloneElement(render, props, children) : <TextComponent {...props}>{children}</TextComponent>;
  };

  return createElement(
    {
      ref,
      id,
      className: clsx(
        styles.text,
        styles[size],
        styles[type],
        styles[leading],
        textAlign && styles[textAlign],
        bold && styles.bold,
        noWrap && styles.nowrap,
      ),
      style: colorVariable(color),
      ...rest,
    },
    <>{children}</>,
  );
}

export const Text = fixedForwardRef(TextInner);
