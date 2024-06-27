'use client';

import clsx from 'clsx';
import { isValidElement, cloneElement } from 'react';
import styles from './Flex.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { Spacing, AlignItems, JustifyContent, FlexDirection } from '../../types/style';
import { paddingVariables, marginVariables, gapVariables } from '../../utils/style';
import { HTMLTagname } from '../../utils/types';
import { Box } from '../Box/Box';
import type { PaddingProps, MarginProps } from '../../types/style';
import type { FC, PropsWithChildren, ReactElement, ComponentType, ReactNode } from 'react';

type Props = {
  /**
   * レンダリングされるHTML要素
   * @default div
   */
  as?: HTMLTagname | ReactElement<ComponentType<typeof Box>>;
  /**
   * 子要素同士の間隔。指定しない場合は0
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  spacing?: Spacing;
  /**
   * direction 重ねる向き
   * @default row
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
   * 折り返しの有無
   * @default false
   */
  wrap?: boolean;
  /**
   * 親要素に対し、100%としたい場合に使用
   */
  height?: 'full';
  /**
   * デフォルト<Flex>は横幅いっぱいを専有する。しかし例えば、フレックスコンテナの子要素として配置した場合、横幅が自身の子に合わせて小さくなる。これが不都合の場合に100%とする事が可能
   */
  width?: 'full';
} & MarginProps &
  PaddingProps &
  CustomDataAttributeProps;

export const Flex: FC<PropsWithChildren<Props>> = ({
  as: FlexCopmonent = 'div',
  children,
  direction = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  wrap,
  spacing,
  height,
  width,
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
  ...otherProps
}) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const createElement = (props: any, children: ReactNode) => {
    if (isValidElement(FlexCopmonent)) {
      return cloneElement(FlexCopmonent, FlexCopmonent.props, <div {...props}>{children}</div>);
    } else {
      return <FlexCopmonent {...props}>{children}</FlexCopmonent>;
    }
  };

  return createElement(
    {
      className: clsx(styles.flex, height === 'full' && styles.heightFull, width === 'full' && styles.widthFull),
      style: {
        '--flex-direction': direction,
        '--align-items': alignItems,
        '--justify-content': justifyContent,
        '--flex-wrap': wrap ? 'wrap' : 'nowrap',
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
      },
      ...otherProps,
    },
    children,
  );
};
