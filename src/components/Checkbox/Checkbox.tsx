'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Checkbox.module.css';
import type { InputHTMLAttributes } from 'react';

type Props = {
  /**
   * サイズ
   * @default medium
   */
  size?: 'medium' | 'small';
  /**
   * ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける
   */
  name: string;
  /**
   * 選択時のコールバックに渡される値
   */
  value: string | number;
  /**
   * ラベルとして表示される文字列、または要素
   */
  children: InputHTMLAttributes<HTMLInputElement>['children'];
  /**
   * 値が変化した場合のコールバック
   */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'children' | 'onChange'>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ size = 'medium', children, ...otherProps }, ref) => {
  return (
    <label className={clsx(styles.container, styles[size])}>
      <input ref={ref} type="checkbox" className={styles.checkbox} {...otherProps} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
