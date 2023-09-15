'use client';

import { CheckAIcon } from '@ubie/ubie-icons';
import { FC, ReactNode } from 'react';
import styles from './Checkbox.module.css';

type Props = {
  children: ReactNode;
};

export const Checkbox: FC<Props> = ({ children }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.checkIconContainer}>
        <CheckAIcon className={styles.checkIcon} />
      </span>
      {children}
    </label>
  );
};
