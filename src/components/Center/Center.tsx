'use client';

import clsx from 'clsx';
import {
  isValidElement,
  cloneElement,
  type PropsWithChildren,
  FC,
  CSSProperties,
  ComponentType,
  ReactElement,
  ReactNode,
} from 'react';
import styles from './Center.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import { marginVariables, paddingVariables } from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import { Box } from '../Box/Box';
import type { MarginYProps, PaddingProps } from '../../types/style';

type Props = {
  /**
   * レンダリングされるHTML要素
   * @default div
   */
  as?: HTMLTagname | ReactElement<ComponentType<typeof Box>>;
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
  /**
   * 横幅の最大値
   * @default none
   */
  maxWidth?: string;
  /**
   * HTMLのID属性の値
   */
  id?: string;
} & MarginYProps &
  PaddingProps &
  CustomDataAttributeProps;

export const Center: FC<PropsWithChildren<Props>> = ({
  as: CenterCopmonent = 'div',
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
  id,
  maxWidth = 'none',
  ...props
}) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(CenterCopmonent)) {
      return <div {...props}>{cloneElement(CenterCopmonent, CenterCopmonent.props, children)}</div>;
    } else {
      return <CenterCopmonent {...props}>{children}</CenterCopmonent>;
    }
  };

  return createElement(
    {
      id,
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
      } as CSSProperties,
      ...props,
    },
    children,
  );
};
