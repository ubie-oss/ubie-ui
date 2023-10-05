import { UnfoldMoreIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Select.module.css';

type Props = {
  isInvalid?: boolean;
  disabled?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLSelectElement>;

const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ isInvalid = false, disabled = false, children, className, ...props }, ref) => {
    return (
      <div className={clsx({ [styles.isInvalid]: isInvalid, [styles.disabled]: disabled }, styles.wrapper, className)}>
        <select {...props} disabled={disabled} className={styles.select} ref={ref}>
          {children}
        </select>
        <UnfoldMoreIcon aria-hidden className={styles.icon} />
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
