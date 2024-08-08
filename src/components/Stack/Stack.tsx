'use client';

import { clsx } from 'clsx';
import { isValidElement, cloneElement, ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';
import styles from './Stack.module.css';
import { Spacing, AlignItems, JustifyContent, WidthProps } from '../../types/style';
import { fixedForwardRef } from '../../utils/component';
import { paddingVariables, marginVariables, gapVariables, widthVariables } from '../../utils/style';
import { DistributiveOmit } from '../../utils/types';
import { Box } from '../Box/Box';
import type { PaddingProps, MarginProps } from '../../types/style';
import type { ReactNode, ComponentType, ReactElement } from 'react';

type AllowedAs = ElementType | ReactElement<ComponentType<typeof Box>>;

/**
 * Stackコンポーネント
 * 一方向に一定のリズムで要素を積み上げるレイアウト
 */
function StackBase<TAs extends AllowedAs = 'div'>(
  props: {
    /**
     * レンダリングされる要素の指定、またはビジュアルをBoxに置き換え
     * タグの名前、もしくはBoxコンポーネントを受け取る
     * Boxを指定した場合はBox > Stackの構造となる
     * @default div
     */
    as?: TAs;
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
    DistributiveOmit<ComponentPropsWithRef<TAs extends ElementType ? TAs : 'div'>, 'as' | 'className'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const {
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
  } = props;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(StackComponent)) {
      return cloneElement(StackComponent, StackComponent.props, <div {...props}>{children}</div>);
    } else {
      const Element = StackComponent as ElementType;

      if (typeof (Element as unknown) !== 'string') {
        // eslint-disable-next-line no-console
        console.error('as prop only supports native elements or Box.');
      }

      return <Element {...props}>{children}</Element>;
    }
  };

  return createElement(
    {
      ref,
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
}

export const Stack = fixedForwardRef(StackBase);
