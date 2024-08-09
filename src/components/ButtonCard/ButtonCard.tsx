'use client';

import { forwardRef, type ComponentPropsWithRef } from 'react';
import styles from './ButtonCard.module.css';

type Props = Omit<ComponentPropsWithRef<'button'>, 'className'>;

export const ButtonCard = forwardRef<HTMLButtonElement, Props>(({ children, type = 'button', ...rest }, ref) => {
  return (
    <button type={type} ref={ref} className={styles.card} {...rest}>
      {children}
    </button>
  );
});

ButtonCard.displayName = 'ButtonCard';
