'use client';

import { clsx } from 'clsx';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type Props = {
  /**
   * ネイティブ要素の `id` 属性。ページで固有のIDを指定
   */
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  /**
   * 有効でない入力を保持しているかどうか
   */
  isInvalid?: boolean;
  /**
   * 値
   */
  value: string | number;
  /**
   * フィールドを無効化するかどうか
   */
  disabled?: boolean;
  /**
   * 値が変化した場合のコールバック
   */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'invalid' | 'value' | 'disabled' | 'onChange'>;

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ isInvalid, ...props }, ref) => {
  const className = clsx({ [styles.isInvalid]: isInvalid && !props.disabled }, styles.input, props.className);

  return <input {...props} className={className} ref={ref} aria-invalid={isInvalid} />;
});

Input.displayName = 'Input';
