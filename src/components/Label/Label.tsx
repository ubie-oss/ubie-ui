'use client';

import styles from './Label.module.css';
import type { ElementType, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType<{ className?: string; children: ReactNode }> | 'label' | 'p';
  htmlFor?: string;
};

export const Label: FC<Props> = ({ children, as: LabelComponent = 'label', htmlFor }) => {
  return (
    <LabelComponent htmlFor={htmlFor} className={styles.label}>
      {children}
    </LabelComponent>
  );
};
