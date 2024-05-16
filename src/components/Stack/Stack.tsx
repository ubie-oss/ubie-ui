'use client';

import { clsx } from 'clsx';
import { isValidElement, cloneElement } from 'react';
import styles from './Stack.module.css';
import { Spacing, AlignItems, JustifyContent } from '../../types/style';
import { paddingVariables, marginVariables } from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import { Box } from '../Box/Box';
import type { PaddingProps, MarginProps } from '../../types/style';
import type { FC, ReactNode, ComponentType, ReactElement } from 'react';

type Props = {
  /**
   * レンダリングされるコンポーネントまたはHTML要素
   * @default div
   */
  as?: HTMLTagname | ReactElement<ComponentType<typeof Box>>;
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
} & MarginProps &
  PaddingProps;

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
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
}) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(StackComponent)) {
      return cloneElement(StackComponent, StackComponent.props, <div {...props}>{children}</div>);
    } else {
      return <StackComponent {...props}>{children}</StackComponent>;
    }
  };

  return createElement(
    {
      className: clsx(className, styles.stack),
      style: {
        alignItems: `${alignItems}`,
        justifyContent: `${justifyContent}`,
        gap: `var(--size-spacing-${spacing})`,
        ...paddingVariables({
          pt,
          pr,
          pb,
          pl,
        }),
        ...marginVariables({
          mt,
          mr,
          mb,
          ml,
        }),
      },
    },
    children,
  );
};
