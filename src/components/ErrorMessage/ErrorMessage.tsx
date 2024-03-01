'use client';

import styles from './ErrorMessage.module.css';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ErrorMessage: FC<Props> = ({ children }) => (
  <p aria-live="polite" className={styles.error}>
    {children}
  </p>
);
