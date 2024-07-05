'use client';

import { clsx } from 'clsx';
import styles from './Text.module.css';
import {
  TextColor,
  BodyFontSize,
  BodyLeading,
  HeadingFontSize,
  HeadingLeading,
  NoteFontSize,
  NoteLeading,
  ButtonFontSize,
  ButtonLeading,
  TagFontSize,
  TagLeading,
} from '../../types/style';
import { fixedForwardRef } from '../../utils/component';
import { DistributiveOmit } from '../../utils/types';
import type { ReactNode, ElementType, ForwardedRef, ComponentPropsWithRef } from 'react';

type BaseProps = {
  /**
   * 表示するテキスト
   * pやdivなどを含めないでください（文法的にNGです）
   */
  children: ReactNode;
  /**
   * 太字とするかどうか
   * @default false
   */
  bold?: boolean;
  /**
   * 文字色の抽象値
   * @default main
   */
  color?: TextColor;
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

type NoteProps = BaseProps & {
  /**
   * テキストの種類
   */
  type: 'note';
  /**
   * フォントサイズの抽象値
   */
  size?: NoteFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   * @default default
   */
  leading?: NoteLeading;
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

type TextProps = BodyProps | HeadingProps | NoteProps | ButtonProps | TagProps;

function TextInner<T extends ElementType>(
  props: {
    /**
     * コンポーネントのHTML要素
     * @default p
     */
    as?: T;
  } & TextProps &
    DistributiveOmit<ComponentPropsWithRef<ElementType extends T ? 'p' : T>, 'as'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const {
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
  const color = _color != null ? _color : TextComponent === 'a' || TextComponent === 'button' ? 'link' : 'main';

  return (
    <TextComponent
      re={ref}
      id={id}
      className={clsx(
        styles.text,
        styles[size],
        styles[type],
        styles[leading],
        styles[color],
        textAlign && styles[textAlign],
        bold && styles.bold,
        noWrap && styles.nowrap,
      )}
      {...rest}
    >
      {children}
    </TextComponent>
  );
}

export const Text = fixedForwardRef(TextInner);
