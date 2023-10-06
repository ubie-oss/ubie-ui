import clsx from 'clsx';
import { FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

type Props = {
  /**
   * ネイティブ要素の `id` 属性。ページで固有のIDを指定
   */
  id?: TextareaHTMLAttributes<HTMLTextAreaElement>['id'];
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
   */
  disabled?: boolean;
  /**
   * 値が変化した場合のコールバック
   */
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'value' | 'onChange'>;

export const TextArea: FC<Props> = ({ isInvalid = false, className, ...props }) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea {...props} className={_className} />;
};
