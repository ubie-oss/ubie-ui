'use client';

import { forwardRef, type PropsWithChildren, type ButtonHTMLAttributes } from 'react';
import styles from './ButtonCard.module.css';

type Props = PropsWithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>>;

export const ButtonCard = forwardRef<HTMLButtonElement, Props>(({ children, type = 'button', ...rest }, ref) => {
  return (
    <button type={type} ref={ref} className={styles.card} {...rest}>
      {children}
    </button>
  );
});

ButtonCard.displayName = 'ButtonCard';
