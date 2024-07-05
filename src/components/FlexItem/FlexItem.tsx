'use client';

import { clsx } from 'clsx';
import { CSSProperties, forwardRef, type PropsWithChildren, type HTMLAttributes } from 'react';
import styles from './FlexItem.module.css';
import { MarginProps, PaddingProps } from '../../types/style';
import { marginVariables, paddingVariables } from '../../utils/style';
import { CSSWitdh, CSSMaxWidth, CSSMinWidth } from '../../utils/types';

type FlexProperty = {
  grow?: number;
  shrink?: number;
  basis?: CSSWitdh;
};

type AllowedDivAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

type Props = {
  /**
   * flexの値を指定。 growなどを指定したい場合はオブジェクトで指定
   * @defaultValue none
   */
  flex?: 'none' | FlexProperty;
  /**
   * 最小幅
   * @defaultValue auto
   */
  minWidth?: CSSMinWidth;
  /**
   * 最大幅
   * @defaultValue none
   */
  maxWidth?: CSSMaxWidth;
} & MarginProps &
  PaddingProps &
  AllowedDivAttributes;

/**
 * FlexやStackの子として配置し、レイアウトを調整
 */
export const FlexItem = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    {
      children,
      flex = 'none',
      minWidth = 'auto',
      maxWidth = 'none',
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      ...rest
    },
    ref,
  ) => {
    const flexObj: { [key: string]: string } =
      typeof flex === 'object'
        ? {
            '--flex-grow': flex.grow != null ? flex.grow.toString() : '0',
            '--flex-shrink': flex.shrink != null ? flex.shrink.toString() : '1',
            '--flex-basis': flex.basis ?? 'auto',
          }
        : {};

    return (
      <div
        className={clsx(styles.flexItem, flex === 'none' && styles.none, typeof flex === 'object' && styles.longhand)}
        ref={ref}
        style={
          {
            '--min-width': minWidth,
            '--max-width': maxWidth,
            ...flexObj,
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
          } as CSSProperties
        }
        {...rest}
      >
        {children}
      </div>
    );
  },
);

FlexItem.displayName = 'FlexItem';
