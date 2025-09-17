'use client';

import { clsx } from 'clsx';
import { CSSProperties, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react';
import styles from './Pre.module.css';

type AllowedSpanAttributes = Omit<HTMLAttributes<HTMLSpanElement>, 'className'>;

type Props = {
  /**
   * 折り返しや空白、改行の扱い
   * @default 'pre-line'
   */
  whiteSpace?: 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  /**
   * inline-blockとして扱う
   */
  inline?: boolean;
} & AllowedSpanAttributes;

export const Pre = forwardRef<HTMLSpanElement, PropsWithChildren<Props>>(
  ({ children, whiteSpace = 'pre-line', inline = false, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(styles.pre, inline && styles.inline)}
        style={
          {
            '--white-space': whiteSpace,
          } as CSSProperties
        }
        {...rest}
      >
        {children}
      </span>
    );
  },
);

Pre.displayName = 'Pre';
