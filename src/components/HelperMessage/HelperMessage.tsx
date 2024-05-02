'use client';

import styles from './HelperMessage.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & CustomDataAttributeProps;

export const HelperMessage: FC<Props> = ({ children, ...otherProps }) => (
  <p className={styles.message} {...otherProps}>
    {children}
  </p>
);
