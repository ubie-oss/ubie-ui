import { UnfoldMoreIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Select.module.css';

type Props = {
  /**
   * ネイティブ要素の `id` 属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * 有効でない入力を保持しているかどうか
   * @default false
   */
  isInvalid?: boolean;
  /**
   * フィールドを無効化するかどうか
   * @default false
   */
  disabled?: boolean;
  /**
   * CSSのクラス
   */
  className?: string;
} & Omit<InputHTMLAttributes<HTMLSelectElement>, 'id' | 'disabled'>;

const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ isInvalid = false, disabled = false, children, className, ...props }, ref) => {
    return (
      <div className={clsx({ [styles.isInvalid]: isInvalid, [styles.disabled]: disabled }, styles.wrapper, className)}>
        <select {...props} disabled={disabled} className={styles.select} ref={ref} aria-invalid={isInvalid}>
          {children}
        </select>
        <UnfoldMoreIcon aria-hidden className={styles.icon} />
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
