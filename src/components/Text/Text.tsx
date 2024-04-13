'use client';

import { clsx } from 'clsx';
import { FC, ElementType, ReactNode } from 'react';
import styles from './Text.module.css';
import { TextColor } from '../../types/style';

type BaseProps = {
  /**
   * コンポーネントのHTML要素
   * @default p
   */
  as?: ElementType<{ className?: string; children: ReactNode }>;
  /**
   * 太字とするかどうか
   */
  bold?: boolean;
  /**
   * 文字色の抽象値
   * @default textMain
   */
  color?: TextColor;
  /**
   * 子要素
   */
  children: ReactNode;
  /**
   * CSSのクラス
   */
  className?: string;
};

type BodyFontSize = 'sm' | 'md' | 'lg';
type BodyLeading = 'default' | 'narrow' | 'tight';
type BodyProps = BaseProps & {
  /**
   * テキストの種類
   */
  type?: 'body';
  /**
   * フォントサイズの抽象値
   */
  size?: BodyFontSize;
  /**
   * 行送りの抽象値（`line-height`）
   */
  leading?: BodyLeading;
};

type HeadingFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
   */
  leading?: 'default';
};

type NoteFontSize = 'sm' | 'md' | 'lg';
type NoteLeading = 'default' | 'narrow' | 'tight';
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
   */
  leading?: NoteLeading;
};

type ButtonFontSize = 'sm' | 'md' | 'lg';
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
   */
  leading?: 'default';
};

type TagFontSize = 'sm' | 'md' | 'lg';
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
   */
  leading?: 'default';
};

type TextProps = BodyProps | HeadingProps | NoteProps | ButtonProps | TagProps;

/**
 * Design Systemに則ったTypographyのスタイルを提供
 */
export const Text: FC<TextProps> = ({
  as: TextComponent = 'p',
  size = 'md',
  type = 'body',
  leading = 'default',
  bold = false,
  color = 'main',
  children,
  className,
}) => {
  return (
    <TextComponent
      className={clsx(
        className,
        styles.text,
        bold && styles.bold,
        styles[size],
        styles[type],
        styles[leading],
        styles[color],
      )}
    >
      {children}
    </TextComponent>
  );
};
