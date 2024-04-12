import clsx from 'clsx';
import styles from './Flex.module.css';
import { Spacing, AlignItems, JustifyContent, FlexDirection } from '../../types/style';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  /**
   * 子要素同士の間隔
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
   * デフォルトで<Flex>は横幅いっぱいを専有する。しかし例えば、フレックスコンテナの子要素として配置した場合、横幅が自身の子に合わせて小さくなる。これが不都合の場合に100%とする事が可能
   */
  width?: 'full';
};

export const Flex: FC<PropsWithChildren<Props>> = ({
  children,
  direction = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  wrap = false,
  spacing,
  height,
  width,
}) => {
  // Directly specifying the markuplint will result in a markuplint error.
  const gapStyle = spacing ? `var(--size-spacing-${spacing})` : '0';

  return (
    <div
      className={clsx(styles.flex, height === 'full' && styles.heightFull, width === 'full' && styles.widthFull)}
      style={
        {
          '--gap': gapStyle,
          '--flex-direction': direction,
          '--align-items': alignItems,
          '--justify-content': justifyContent,
          '--flex-wrap': wrap ? 'wrap' : 'nowrap',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
