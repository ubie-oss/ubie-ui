'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './TextArea.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import type { TextareaHTMLAttributes } from 'react';

type Props = {
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
  /**
   * 値
   */
  value: string;
  /**
   * フィールドを無効化するかどうか
   * @default false
   */
  disabled?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> &
  CustomDataAttributeProps;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ isInvalid = false, className, ...props }, ref) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea ref={ref} {...props} className={_className} aria-invalid={isInvalid} />;
});

TextArea.displayName = 'TextArea';
