'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import styles from './RadioCard.module.css';

type RadioCardProps = {
  /**
   * 横幅を100%占有するかどうか
   * @default false
   */
  block?: boolean;
};

type Props = RadioCardProps & Omit<ComponentPropsWithRef<'input'>, keyof RadioCardProps>;

/**
 * アクセシビリティに配慮したラジオボタン。
 * 選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用
 */
const RadioCard: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ name, value, checked, children, className, block = false, disabled, ...otherProps }, ref) => {
    return (
      <label
        className={clsx(styles.label, block && styles.block, checked && styles.checked, disabled && styles.disabled)}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className={clsx(className, styles.radio)}
          ref={ref}
          disabled={disabled}
          {...otherProps}
        />
        {children}
      </label>
    );
  },
);

RadioCard.displayName = 'RadioCard';

export { RadioCard };
