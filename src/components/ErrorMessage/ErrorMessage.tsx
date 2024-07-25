'use client';

import { type ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styles from './ErrorMessage.module.css';

type Props = {
  children: ReactNode;
} & Omit<ComponentPropsWithRef<'p'>, 'children'>;

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(({ children, ...otherProps }, ref) => (
  <p aria-live="polite" className={styles.error} ref={ref} {...otherProps}>
    {children}
  </p>
));

ErrorMessage.displayName = 'ErrorMessage';
