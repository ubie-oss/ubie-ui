'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

type Props = {
  size?: 'medium' | 'small';
} & Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'children'>> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Checkbox: FC<Props> = ({ size = 'medium', children, ...otherProps }) => {
  return (
    <label className={clsx(styles.container, styles[size])}>
      <input type="checkbox" className={styles.checkbox} {...otherProps} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
};
