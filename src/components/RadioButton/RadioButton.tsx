'use client';

import clsx from 'clsx';
import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

type RadioProps = Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'>> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'children' | 'value' | 'name'>;

type Props = {
  /**
   * グループ化（排他制御）したい要素には同じ名前をつける
   */
  name: string;
  /**
   * 選択時のコールバックで渡される値
   */
  value: string | number;
  /**
   * ラベルに表示されるテキストまたは要素
   */
  children: InputHTMLAttributes<HTMLInputElement>['children'];
  /**
   * サイズ
   * @default medium
   */
  size?: 'medium' | 'small';
} & RadioProps &
  CustomDataAttributeProps;

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
