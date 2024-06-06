'use client';

import clsx from 'clsx';
import { FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

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

export const TextArea: FC<Props> = ({ isInvalid = false, className, ...props }) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea {...props} className={_className} aria-invalid={isInvalid} />;
};
