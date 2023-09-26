'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, PropsWithChildren, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

type Props = {
  size?: 'medium' | 'small';
} & InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;

export const Checkbox: FC<Props> = ({ size = 'medium', children }) => {
  return (
    <label className={clsx(styles.container, styles[size])}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
};
