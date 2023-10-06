'use client';

import { clsx } from 'clsx';
import { FC, ElementType, ReactNode } from 'react';
import styles from './Text.module.css';
import { FontSize, Leading, TextColor, TextType } from '../../types/style';

type Props = {
  /**
   * コンポーネントのHTML要素
   * @default p
   */
  as?: ElementType<{ className?: string; children: ReactNode }>;
  /**
   * フォントサイズの抽象値
   * @default md
   */
  size?: FontSize;
  /**
   * テキストの種類
   * @default body
   */
  type?: TextType;
  /**
   * 行送りの抽象値（`line-height`）
   * @default default
   */
  leading?: Leading;
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

/**
 * Design Systemに則ったTypographyのスタイルを提供
 */
export const Text: FC<Props> = ({
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
