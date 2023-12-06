import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styles from './Heading.module.css';
import type { ReactNode } from 'react';

type Props = {
  textAlign?: 'left' | 'center' | 'right';
  children: ReactNode;
  primaryIcon?: ReactNode;
  accentIcon?: ReactNode;
  whiteIcon?: ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  leadingBorder?: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
};

const Heading = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (
    {
      textAlign = 'left',
      children,
      primaryIcon,
      accentIcon,
      whiteIcon,
      size,
      variant = 'secondary',
      leadingBorder,
      as,
    },
    ref,
  ) => {
    const As = as;

    const className = clsx(
      styles.heading,
      primaryIcon || accentIcon || whiteIcon ? styles.hasIcon : null,
      styles[textAlign],
      styles[size],
      leadingBorder ? styles.secondary : styles[variant],
      leadingBorder ? styles.leadingBorder : null,
    );

    return (
      <As className={className} ref={ref}>
        {primaryIcon && (
          <span aria-hidden className={clsx(styles.icon, styles.primary)}>
            {primaryIcon}
          </span>
        )}
        {accentIcon && (
          <span aria-hidden className={clsx(styles.icon, styles.accent)}>
            {accentIcon}
          </span>
        )}
        {whiteIcon && (
          <span aria-hidden className={clsx(styles.icon, styles.white)}>
            {whiteIcon}
          </span>
        )}
        {children}
      </As>
    );
  },
);

Heading.displayName = 'Heading';

export { Heading };
