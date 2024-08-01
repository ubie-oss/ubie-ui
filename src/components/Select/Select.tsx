'use client';

import { UnfoldMoreIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
};

type Props = SelectProps & Omit<ComponentPropsWithRef<'select'>, keyof SelectProps>;

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ isInvalid = false, disabled = false, children, className, ...props }, ref) => {
    return (
      <div className={clsx({ [styles.isInvalid]: isInvalid, [styles.disabled]: disabled }, styles.wrapper, className)}>
        <select {...props} disabled={disabled} className={styles.select} ref={ref} aria-invalid={isInvalid}>
          {children}
        </select>
        <UnfoldMoreIcon aria-hidden className={styles.icon} />
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
