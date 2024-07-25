'use client';

import { clsx } from 'clsx';
import { CSSProperties, forwardRef, type PropsWithChildren, type ComponentPropsWithRef } from 'react';
import styles from './FlexItem.module.css';
import { CSSWitdh, MarginProps, PaddingProps, WidthProps } from '../../types/style';
import { marginVariables, paddingVariables } from '../../utils/style';

type FlexProperty = {
  grow?: number;
  shrink?: number;
  basis?: CSSWitdh;
};

type AllowedDivAttributes = Omit<ComponentPropsWithRef<'div'>, 'className'>;

type Props = {
  /**
   * flexの値を指定。 growなどを指定したい場合はオブジェクトで指定
   * @defaultValue none
   */
  flex?: 'none' | FlexProperty;
} & Omit<WidthProps, 'width'> &
  MarginProps &
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
