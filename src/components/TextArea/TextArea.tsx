'use client';

import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './TextArea.module.css';

type TextareaProps = {
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
};

type Props = TextareaProps & Omit<ComponentPropsWithRef<'textarea'>, keyof TextareaProps>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ isInvalid = false, className, ...props }, ref) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea ref={ref} {...props} className={_className} aria-invalid={isInvalid} />;
});

TextArea.displayName = 'TextArea';
