'use client';

import clsx from 'clsx';
import { isValidElement, cloneElement } from 'react';
import styles from './Center.module.css';
import { createSpacingVariableFromKey, paddingVariables } from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import { Box } from '../Box/Box';
import type { MarginYProps, PaddingProps } from '../../types/style';
import type { FC, PropsWithChildren, CSSProperties, ComponentType, ReactElement, ReactNode } from 'react';

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
  PaddingProps;

export const Center: FC<PropsWithChildren<Props>> = ({
  as: CenterCopmonent = 'div',
  children,
  pt,
  pr,
  pb,
  pl,
  mt,
  mb,
  textCenter,
  childrenCenter,
  id,
  maxWidth = 'none',
}) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(CenterCopmonent)) {
      return (
          <div {...props}>
            {cloneElement(CenterCopmonent, CenterCopmonent.props, children)}
          </div>
      )
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
          pt,
          pr,
          pb,
          pl,
        }),
        ...{
          '--margin-top': mt ? createSpacingVariableFromKey(mt) : 0,
          '--margin-bottom': mb ? createSpacingVariableFromKey(mb) : 0,
        },
      } as CSSProperties,
    },
    children,
  );
};
