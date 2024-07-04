'use client';

import { clsx } from 'clsx';
import { CSSProperties, forwardRef, type PropsWithChildren, type HTMLAttributes } from 'react';
import styles from './FlexItem.module.css';
import { CSSWitdh, CSSMaxWidth, CSSMinWidth } from '../../utils/types';

type FlexProperty = {
  grow?: number;
  shrink?: number;
  basis?: CSSWitdh;
};

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
} & HTMLAttributes<HTMLDivElement>;

/**
 * FlexやStackの子として配置し、レイアウトを調整
 */
export const FlexItem = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, flex = 'none', minWidth = 'auto', maxWidth = 'none', ...rest }, ref) => {
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
