'use client';

import { clsx } from 'clsx';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type Props = {
  isInvalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ isInvalid, ...props }, ref) => {
  const className = clsx({ [styles.isInvalid]: isInvalid && !props.disabled }, styles.input, props.className);

  return <input {...props} className={className} ref={ref} />;
});

Input.displayName = 'Input';
