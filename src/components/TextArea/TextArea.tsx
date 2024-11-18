'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './TextArea.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import type { TextareaHTMLAttributes } from 'react';

type Props = {
  /**
   * 値が不正であることを示す
   */
  isInvalid?: boolean;
  /**
   * フィールドを無効化する
   */
  disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  CustomDataAttributeProps;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ isInvalid = false, className, ...props }, ref) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea ref={ref} {...props} className={_className} aria-invalid={isInvalid} />;
});

TextArea.displayName = 'TextArea';
