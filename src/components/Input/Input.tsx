'use client';

import { clsx } from 'clsx';
import { type ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Input.module.css';

type Props = {
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
} & Omit<ComponentPropsWithRef<'input'>, 'invalid'>;

export const Input = forwardRef<HTMLInputElement, Props>(({ isInvalid, ...props }, ref) => {
  const className = clsx({ [styles.isInvalid]: isInvalid && !props.disabled }, styles.input, props.className);

  return <input {...props} className={className} ref={ref} aria-invalid={isInvalid} />;
});

Input.displayName = 'Input';
