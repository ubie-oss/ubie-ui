'use client';

import { CheckAIcon, MinusAIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Checkbox.module.css';

type Props = {
  /**
   * サイズ
   * @default medium
   */
  size?: 'medium' | 'small';
  /**
   * 中間状態の見た目とする。input要素のindeterminateプロパティの変更は行わないため注意。
   */
  isIndeterminate?: boolean;
} & Omit<ComponentPropsWithRef<'input'>, 'size'>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', children, disabled, isIndeterminate = false, ...otherProps }, ref) => {
    return (
      <label className={clsx(styles.label, styles[size])}>
        <input ref={ref} type="checkbox" className={styles.checkbox} disabled={disabled} {...otherProps} />
        <span className={clsx(styles.symbol, styles[size], isIndeterminate && styles.isIndeterminate)}>
          {isIndeterminate ? (
            <MinusAIcon className={clsx(styles.symbolIndeterminate, styles[size])} aria-hidden="true" />
          ) : (
            <CheckAIcon className={clsx(styles.symbolCheckIcon, styles[size])} aria-hidden="true" />
          )}
        </span>
        {children}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
