'use client';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styles from './Button.module.css';
import { CircularProgress } from './CircularProgress';
import { VariantIcon } from './VariantIcon';
import type { ButtonProps } from './ButtonTypes';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'large',
      block = false,
      icon: _icon,
      fixedIcon: _fixedIcon,
      suffixIcon: _suffixIcon,
      type = 'button',
      disabled = false,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const icon = loading ? <CircularProgress /> : _icon === 'default' ? <VariantIcon variant={variant} /> : _icon;
    const fixedIcon = _fixedIcon === 'default' ? <VariantIcon variant={variant} /> : _fixedIcon;
    const suffixIcon = _suffixIcon === 'default' ? <VariantIcon variant={variant} /> : _suffixIcon;
    const cls = clsx({
      [styles.button]: true,
      [styles[variant]]: true,
      [styles[size]]: true,
      [styles.block]: block,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    });

    return (
      <button type={type} className={cls} ref={ref} disabled={disabled || loading} {...props}>
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
