'use client';

import { clsx } from 'clsx';
import { FC, ElementType, ReactNode } from 'react';
import styles from './Text.module.css';
import { FontSize, Leading, TextColor, TextType } from '../../types/style';

type Props = {
  as?: ElementType<{ className?: string; children: ReactNode }>;
  size?: FontSize;
  type?: TextType;
  leading?: Leading;
  bold?: boolean;
  color?: TextColor;
  children: ReactNode;
  className?: string;
};

/**
 * テキスト用コンポーネント
 * テキストにスタイルを適用したいときに使用する
 *
 * @param size フォントサイズの抽象値。初期値は md
 * @param type テキストの種類。初期値は body
 * @param leading 行送りの抽象値（line-height）。初期値は default
 * @param bold テキストの太字をコントロールする値
 * @param color 文字色の抽象値。初期値は textMain
 * @param as テキストコンポーネントの HTML タグ名。初期値は p
 * @param children
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
