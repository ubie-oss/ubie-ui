'use client';

import { ArrowBDownIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import styles from './Accordion.module.css';

export type Size = 'small' | 'medium';

type Props = {
  header: string;
  size?: Size;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({ header, children, size = 'medium' }) => {
  return (
    <details className={clsx(styles.container, styles[size])}>
      <summary className={styles.button}>
        <span>{header}</span>
        <ArrowBDownIcon aria-hidden className={styles.arrow} />
      </summary>
      <div className={styles.panel}>{children}</div>
    </details>
  );
};
