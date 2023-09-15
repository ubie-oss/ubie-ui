'use client';

import { clsx } from 'clsx';
import { ElementType, FC, ReactNode } from 'react';
import styles from './Stack.module.css';
import { Spacing, FlexDirection, AlignItems, JustifyContent } from '../../types/style';

type Props = {
  as?: ElementType<{ className?: string; children: ReactNode }>;
  spacing: Spacing;
  direction?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  className?: string;
  children: ReactNode;
};

/**
 * Stackコンポーネント
 * 要素を重ねたいときに使う(Flexbox)
 *
 * @param as コンポーネントの HTML タグ名。初期値は div
 * @param spacing 子要素の間隔。
 * @param direction 重ねる向き。初期値は column
 * @param alignItems
 * @param justifyContent
 * @param children
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
