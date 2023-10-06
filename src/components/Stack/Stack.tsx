'use client';

import { clsx } from 'clsx';
import { ElementType, FC, ReactNode } from 'react';
import styles from './Stack.module.css';
import { Spacing, FlexDirection, AlignItems, JustifyContent } from '../../types/style';

type Props = {
  /**
   * レンダリングされるコンポーネントまたはHTML要素
   * @default div
   */
  as?: ElementType<{ className?: string; children: ReactNode }>;
  /**
   * 子要素の間隔
   */
  spacing: Spacing;
  /**
   * direction 重ねる向き
   * @default column
   */
  direction?: FlexDirection;
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
  direction = 'column',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
}) => {
  return (
    <StackComponent
      style={{
        flexDirection: `${direction}`,
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
