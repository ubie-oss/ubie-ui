'use client';

import clsx from 'clsx';
import {
  CSSProperties,
  ReactNode,
  ForwardedRef,
  ComponentPropsWithRef,
  ElementType,
  type ReactElement,
  type ComponentType,
} from 'react';
import { isValidElement, cloneElement } from 'react';
import styles from './Center.module.css';
import { fixedForwardRef } from '../../utils/component';
import { marginVariables, paddingVariables, widthVariables } from '../../utils/style';
import { DistributiveOmit } from '../../utils/types';
import { Box } from '../Box/Box';
import type { MarginYProps, PaddingProps, WidthProps } from '../../types/style';

type AllowedAs = ElementType | ReactElement<ComponentType<typeof Box>>;

function CenterInner<TAs extends AllowedAs>(
  props: {
    /**
     * レンダリングされる要素の指定、またはビジュアルをBoxに置き換え
     * Boxを指定した場合はCenter > Boxの構造となる
     * @default div
     */
    as?: TAs;
    /**
     * 内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します
     * @default false
     */
    textCenter?: boolean;
    /**
     * 子要素を中央に配置。孫要素には影響しません
     * @default false
     */
    childrenCenter?: boolean;
  } & MarginYProps &
    PaddingProps &
    WidthProps &
    DistributiveOmit<ComponentPropsWithRef<TAs extends ElementType ? TAs : 'div'>, 'as' | 'className'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const {
    as: CenterComponent = 'div',
    children,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    my,
    mt,
    mb,
    textCenter,
    childrenCenter,
    width,
    minWidth,
    maxWidth,
    ...rest
  } = props;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(CenterComponent)) {
      return <div {...props}>{cloneElement(CenterComponent, CenterComponent.props, children)}</div>;
    } else {
      const Element = CenterComponent as ElementType;
      return <Element {...props}>{children}</Element>;
    }
  };

  return createElement(
    {
      ref,
      className: clsx(styles.center, textCenter && styles.textCenter, childrenCenter && styles.childrenCenter),
      style: {
        '--max-width': maxWidth,
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
          my,
          mt,
          mb,
        }),
        ...widthVariables({
          width,
          minWidth,
          maxWidth,
        }),
      } as CSSProperties,
      ...rest,
    },
    children,
  );
}

export const Center = fixedForwardRef(CenterInner);
