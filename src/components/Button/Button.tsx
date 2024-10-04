'use client';

import { clsx } from 'clsx';
import { type CSSProperties, forwardRef } from 'react';
import styles from './Button.module.css';
import { VariantIcon } from './VariantIcon';
import { marginVariables } from '../../utils/style';
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
    const icon = _icon === 'default' ? <VariantIcon variant={variant} /> : _icon;
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
          {icon && <span className={clsx(styles.icon, loading && styles.loading)}>{icon}</span>}
          <span className={clsx(styles.children, loading && styles.loading)}>{children}</span>
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
