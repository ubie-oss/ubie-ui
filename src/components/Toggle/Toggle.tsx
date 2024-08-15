'use client';

import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef, useRef, useState } from 'react';
import styles from './Toggle.module.css';

type InputProps = {
  /**
   * 現在の状態が選択中かどうか
   */
  checked?: boolean;
  /**
   * 初期状態が選択状態かどうか
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * 値が変化した場合のコールバック
   */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /**
   * 無効状態かどうか
   * @default false
   */
  disabled?: boolean;
};

type Props = InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps | 'children' | 'className'>;

export const Toggle = forwardRef<HTMLInputElement, Props>(
  ({ checked: checkedProps, defaultChecked, onChange, ...otherProps }, ref) => {
    const { current: isUnControlled } = useRef(checkedProps === undefined);
    const [isUnControlledChecked, setIsUnControlledChecked] = useState(defaultChecked);

    const isChecked = isUnControlled ? isUnControlledChecked : checkedProps;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      if (isUnControlled) {
        setIsUnControlledChecked(event.target.checked);
      }
      if (onChange) onChange(event);
    };

    return (
      <label className={clsx(styles.root, isChecked ? styles.on : styles.off)}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          checked={isChecked}
          onChange={handleChange}
          className={styles.input}
          {...otherProps}
        />
        <span className={clsx(styles.thumb, isChecked ? styles.thumbOn : styles.thumbOff)} />
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
