'use client';

import { clsx } from 'clsx';
import { isValidElement, cloneElement } from 'react';
import styles from './Stack.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { Spacing, AlignItems, JustifyContent, WidthProps } from '../../types/style';
import { paddingVariables, marginVariables, gapVariables, widthVariables } from '../../utils/style';
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
   * 子要素の間隔。指定しない場合は0
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  spacing?: Spacing;
  /**
   * 水平方向における子要素のレイアウトを定める。
   * @default stretch
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
  PaddingProps &
  WidthProps &
  CustomDataAttributeProps;

/**
 * Stackコンポーネント
 * 一方向に一定のリズムで要素を積み上げるレイアウト
 */
export const Stack: FC<Props> = ({
  as: StackComponent = 'div',
  children,
  className,
  spacing,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  width,
  minWidth,
  maxWidth,
  ...otherProps
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
        ...gapVariables(spacing),
        ...paddingVariables({
          p,
          px,
          py,
          pt,
          pr,
          pb,
          pl,
        }),
        ...marginVariables({
          m,
          mx,
          my,
          mt,
          mr,
          mb,
          ml,
        }),
        ...widthVariables({
          width,
          minWidth,
          maxWidth,
        }),
      },
      ...otherProps,
    },
    children,
  );
};
