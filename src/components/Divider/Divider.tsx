'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import styles from './Divider.module.css';
import { BorderVariant, MarginProps, WidthProps } from '../../types/style';
import { borderVariables, marginVariables, widthVariables } from '../../utils/style';

type AllowedHRAttributes = Omit<HTMLAttributes<HTMLHRElement>, 'className'>;

type Props = {
  /**
   * ボーダーの種類
   * @default gray
   */
  border?: BorderVariant;
} & WidthProps &
  MarginProps &
  AllowedHRAttributes;

export const Divider = forwardRef<HTMLHRElement, Props>(
  ({ border = 'black', m, mx, my, mt, mr, mb, ml, width, minWidth, maxWidth, ...rest }, ref) => {
    return (
      <hr
        className={styles.divider}
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
          ...borderVariables(border),
        }}
        ref={ref}
        {...rest}
      />
    );
  },
);

Divider.displayName = 'Divider';
