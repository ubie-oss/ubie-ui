import { forwardRef } from 'react';
import styles from './VisuallyHidden.module.css';
import type { PropsWithChildren } from 'react';

type Props = {
  tabIndex?: number;
};

export const VisuallyHidden = forwardRef<HTMLSpanElement, PropsWithChildren<Props>>(({ children, tabIndex }, ref) => {
  return (
    <span ref={ref} tabIndex={tabIndex} className={styles.visuallyHidden}>
      {children}
    </span>
  );
});

VisuallyHidden.displayName = 'VisuallyHidden';
