'use client';

import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import styles from './Toggle.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

type Props = {
  /**
   * 現在の状態が選択中かどうか
   */
  checked?: boolean;
  /**
   * 初期状態で選択状態とする
   */
  defaultChecked?: boolean;
  /**
   * 無効状態かどうか
   * @default false
   */
  disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> &
  CustomDataAttributeProps;

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
