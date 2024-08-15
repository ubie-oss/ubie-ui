'use client';

import { clsx } from 'clsx';
import { type ComponentPropsWithRef, forwardRef } from 'react';
import styles from './CheckboxCard.module.css';
import { Icon } from '../Icon/Icon';

type Props = {
  /**
   * 横幅を100%占有するかどうか
   * @default false
   */
  block?: boolean;
} & ComponentPropsWithRef<'input'>;

/**
 * カード状のチェックボックス
 * タップ・クリック可能エリアが広いため操作が容易
 */
const CheckboxCard = forwardRef<HTMLInputElement, Props>(
  ({ name, value, checked, children, className, block = false, disabled, ...otherProps }, ref) => {
    return (
      <label
        className={clsx(styles.label, block && styles.block, checked && styles.checked, disabled && styles.disabled)}
      >
        {checked && (
          <span className={styles.checkIcon}>
            <Icon size="sm" icon="CheckAIcon" aria-hidden="true" />
          </span>
        )}
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          className={clsx(className, styles.checkbox)}
          ref={ref}
          disabled={disabled}
          {...otherProps}
        />
        {children}
      </label>
    );
  },
);

CheckboxCard.displayName = 'CheckboxCard';

export { CheckboxCard };
