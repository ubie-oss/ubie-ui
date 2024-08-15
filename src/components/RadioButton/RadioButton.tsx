'use client';

import clsx from 'clsx';
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from 'react';
import styles from './RadioButton.module.css';

type RadioButtonProps = {
  /**
   * ラベルに表示されるテキストまたは要素
   */
  children: ReactNode;
  /**
   * サイズ
   * @default medium
   */
  size?: 'medium' | 'small';
};

type InputProps = Required<Pick<ComponentPropsWithRef<'input'>, 'onChange' | 'checked'>> &
  Omit<ComponentPropsWithRef<'input'>, keyof RadioButtonProps | 'onChange' | 'checked'>;

type Props = RadioButtonProps & InputProps;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', checked, onChange, value, name, children, ...otherProps }, ref) => {
    return (
      <div className={clsx(styles[size])}>
        <label className={styles.label}>
          <input
            type="radio"
            checked={checked}
            name={name}
            value={value}
            className={styles.radio}
            onChange={onChange}
            ref={ref}
            {...otherProps}
          />
          <span className={styles.icon} />
          <span className={styles.text}>{children}</span>
        </label>
      </div>
    );
  },
);

RadioButton.displayName = 'RadioButton';
