'use client';

import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';
import styles from './Text.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
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
import { HTMLTagname } from '../../utils/types';

type BaseProps = {
  /**
   * コンポーネントのHTML要素
   * @default p
   */
  as?: HTMLTagname;
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
} & CustomDataAttributeProps;

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

/**
 * Design Systemに則ったTypographyのスタイルを提供
 */
export const Text: FC<PropsWithChildren<TextProps>> = ({
  as: TextComponent = 'p',
  size = 'md',
  type = 'body',
  leading = 'default',
  bold = false,
  color = 'main',
  children,
  id,
  textAlign,
  ...props
}) => {
  return (
    <TextComponent
      id={id}
      className={clsx(
        styles.text,
        bold && styles.bold,
        styles[size],
        styles[type],
        styles[leading],
        styles[color],
        textAlign && styles[textAlign],
      )}
      {...props}
    >
      {children}
    </TextComponent>
  );
};
