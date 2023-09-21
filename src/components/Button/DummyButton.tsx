import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Button.module.css';
import { VariantIcon } from './VariantIcon';
import type { BaseProps, DummyButtonProps } from './ButtonTypes';

export const DummyButton = forwardRef<HTMLDivElement, BaseProps & DummyButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'large',
      className,
      block = false,
      icon: _icon,
      fixedIcon: _fixedIcon,
      suffixIcon: _suffixIcon,
      ...props
    },
    ref,
  ) => {
    const icon = _icon === 'default' ? <VariantIcon variant={variant} /> : _icon;
    const fixedIcon = _fixedIcon === 'default' ? <VariantIcon variant={variant} /> : _fixedIcon;
    const suffixIcon = _suffixIcon === 'default' ? <VariantIcon variant={variant} /> : _suffixIcon;
    const cls = clsx(
      {
        [styles.button]: true,
        [styles[variant]]: true,
        [styles[size]]: true,
        [styles.block]: block,
      },
      className,
    );
    return (
      <div className={cls} ref={ref} {...props}>
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </div>
    );
  },
);

DummyButton.displayName = 'DummyButton';
