'use client';

import styles from './ErrorMessage.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & CustomDataAttributeProps;

export const ErrorMessage: FC<Props> = ({ children, ...otherProps }) => (
  <p aria-live="polite" className={styles.error} {...otherProps}>
    {children}
  </p>
);
