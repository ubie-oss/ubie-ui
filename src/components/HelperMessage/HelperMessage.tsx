'use client';

import { type ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styles from './HelperMessage.module.css';

type Props = {
  children: ReactNode;
} & Omit<ComponentPropsWithRef<'p'>, 'children' | 'className'>;

export const HelperMessage = forwardRef<HTMLParagraphElement, Props>(({ children, ...rest }, ref) => {
  return (
    <p ref={ref} className={styles.message} {...rest}>
      {children}
    </p>
  );
});

HelperMessage.displayName = 'HelperMessage';
