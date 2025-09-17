'use client';

import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';
import styles from './Button.module.css';
import { useIcon } from './useIcon';
import { marginVariables } from '../../utils/style';
import type { ButtonProps } from './ButtonTypes';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'large',
      block = false,
      icon,
      prefixIcon: _prefixIcon,
      fixedIcon: _fixedIcon,
      suffixIcon: _suffixIcon,
      type = 'button',
      disabled = false,
      loading = false,
      loadingLabel = '通信中',
      onClick,
      whiteSpace = 'normal',
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      ...props
    },
    ref,
  ) => {
    const prefixIcon = useIcon(icon || _prefixIcon, variant);
    const fixedIcon = useIcon(_fixedIcon, variant);
    const suffixIcon = useIcon(_suffixIcon, variant);
    const cls = clsx({
      [styles.button]: true,
      [styles[variant]]: true,
      [styles[size]]: true,
      [styles.block]: block,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    return (
      <button
        type={type}
        className={cls}
        style={
          {
            ...marginVariables({
              m,
              mx,
              my,
              mt,
              mr,
              mb,
              ml,
            }),
            '--white-space': whiteSpace,
          } as CSSProperties
        }
        ref={ref}
        disabled={disabled}
        aria-disabled={loading}
        onClick={handleClick}
        {...props}
      >
        {loading && <span className={styles.loadingLabel}>{loadingLabel}</span>}
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {prefixIcon && <span className={clsx(styles.icon, loading && styles.loading)}>{prefixIcon}</span>}
          <span className={clsx(styles.children, loading && styles.loading)}>{children}</span>
          {suffixIcon && <span className={clsx(styles.suffixIcon, loading && styles.loading)}>{suffixIcon}</span>}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
