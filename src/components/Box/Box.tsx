'use client';

import clsx from 'clsx';
import styles from './Box.module.css';
import {} from '../../types/style';
import { paddingVariables, marginVariables, radiusVariables } from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import type { CustomDataAttributeProps } from '../../types/attributes';
import type { PaddingProps, MarginProps, RadiusProp, BackgroundColor } from '../../types/style';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  /**
   * レンダリングされるHTML要素
   * @default div
   */
  as?: HTMLTagname;
  /**
   * 背景色
   */
  backgroundColor?: BackgroundColor;
  /**
   * ボーダーの種類
   */
  border?: 'gray' | 'grayThick' | 'primary' | 'primaryThick';
  /**
   * 幅を指定。他のスタイルの影響を受け、幅が100%とならない場合にのみ使用
   */
  width?: 'full';
} & PaddingProps &
  MarginProps &
  RadiusProp &
  CustomDataAttributeProps;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Box: FC<PropsWithChildren<Props>> = ({
  as: BoxCopmonent = 'div',
  children,
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
  radius,
  backgroundColor,
  border,
  width,
  ...props
}) => {
  return (
    <BoxCopmonent
      className={clsx([
        styles.box,
        backgroundColor && styles[`backgroundColor${capitalize(backgroundColor)}`],
        border && styles[`border${capitalize(border)}`],
        width && styles.widthFull,
      ])}
      style={{
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
        ...radiusVariables(radius),
      }}
      {...props}
    >
      {children}
    </BoxCopmonent>
  );
};
