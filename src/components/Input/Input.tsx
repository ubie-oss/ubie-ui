'use client';

import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート

type Props = {
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'invalid'> &
  CustomDataAttributeProps;

export const Input = forwardRef<HTMLInputElement, Props>(({ isInvalid, ...props }, ref) => {
  const className = clsx({ [styles.isInvalid]: isInvalid && !props.disabled }, styles.input, props.className);

  return <input {...props} className={className} ref={ref} aria-invalid={isInvalid} />;
});

Input.displayName = 'Input';
