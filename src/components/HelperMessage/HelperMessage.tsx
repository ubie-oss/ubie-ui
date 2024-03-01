'use client';

import styles from './HelperMessage.module.css';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const HelperMessage: FC<Props> = ({ children }) => <p className={styles.message}>{children}</p>;
