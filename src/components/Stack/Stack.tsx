'use client';

import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './Stack.module.css';
import { Spacing, AlignItems, JustifyContent } from '../../types/style';
import { HTMLTagname } from '../../utils/types';

type Props = {
  /**
   * レンダリングされるコンポーネントまたはHTML要素
   * @default div
   */
  as?: HTMLTagname;
  /**
   * 子要素の間隔
   */
  spacing: Spacing;
  /**
   * 水平方向における子要素のレイアウトを定める。ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと
   * @default flex-start
   */
  alignItems?: AlignItems;
  /**
   * 垂直方向における子要素のレイアウトを定める。
   * @deprecated directionが削除されたため必要なくなりました
   */
  justifyContent?: JustifyContent;
  /**
   * CSSのクラス
   * @deprecated マージンなどをつけたい場合は<Box>を使ってください
   */
  className?: string;
  /**
   * 子要素
   */
  children: ReactNode;
};

/**
 * Stackコンポーネント
 * 一方向に一定のリズムで要素を積み上げるレイアウト
 */
export const Stack: FC<Props> = ({
  as: StackComponent = 'div',
  children,
  className,
  spacing,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
}) => {
  return (
    <StackComponent
      style={{
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        gap: `var(--size-spacing-${spacing})`,
      }}
      className={clsx(className, styles.stack)}
    >
      {children}
    </StackComponent>
  );
};
