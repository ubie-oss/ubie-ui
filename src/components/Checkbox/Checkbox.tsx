'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

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

export const Checkbox: FC<Props> = ({ size = 'medium', children, ...otherProps }) => {
  return (
    <label className={clsx(styles.container, styles[size])}>
      <input type="checkbox" className={styles.checkbox} {...otherProps} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
};
