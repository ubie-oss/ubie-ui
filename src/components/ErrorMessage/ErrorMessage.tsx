'use client';

import { forwardRef } from 'react';
import styles from './ErrorMessage.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & CustomDataAttributeProps;

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(({ children, ...otherProps }, ref) => (
  <p aria-live="polite" className={styles.error} ref={ref} {...otherProps}>
    {children}
  </p>
));

ErrorMessage.displayName = 'ErrorMessage';
