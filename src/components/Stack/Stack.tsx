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
   * 主軸方向における子要素のレイアウトを定める。`direction` prop が `column` の場合は水平軸、 `row` の場合は垂直軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと
   * @default flex-start
   */
  alignItems?: AlignItems;
  /**
   * 交差軸方向における子要素のレイアウトを定める。directionが `column` の場合は垂軸直、`row` の場合は水平軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと
   * @default flex-start
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
