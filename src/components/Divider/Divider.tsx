'use client';

import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes } from 'react';
import styles from './Divider.module.css';
import { MarginProps, WidthProps } from '../../types/style';
import { marginVariables, widthVariables } from '../../utils/style';

type AllowedHRAttributes = Omit<HTMLAttributes<HTMLHRElement>, 'className'>;

type Props = {
  /**
   * ボーダーの種類
   */
  border?: 'gray' | 'primary';
} & WidthProps &
  MarginProps &
  AllowedHRAttributes;

export const Divider = forwardRef<HTMLHRElement, Props>(
  ({ border = 'gray', m, mx, my, mt, mr, mb, ml, width, minWidth, maxWidth, ...rest }, ref) => {
    return (
      <hr
        className={clsx(styles.divider, styles[border])}
        style={{
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
        }}
        ref={ref}
        {...rest}
      />
    );
  },
);

Divider.displayName = 'Divider';
