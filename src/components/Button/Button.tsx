'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode, forwardRef, HTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';
import { AppleIcon } from '../../icons/AppleIcon';
import { GoogleIcon } from '../../icons/GoogleIcon';
import { LINEIcon } from '../../icons/LINEIcon';

export type BaseProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'alert'
    | 'text'
    | 'textAlert'
    | 'authGoogle'
    | 'authLINE'
    | 'authApple';
  size?: 'large' | 'medium' | 'small';
  block?: boolean;
  icon?: 'default' | ReactNode;
  fixedIcon?: 'default' | ReactNode;
  suffixIcon?: 'default' | ReactNode;
};

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;
type DummyButtonProps = Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps>;

export const Button = forwardRef<HTMLButtonElement, BaseProps & ButtonProps>(
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
        [styles.disabled]: !!props.disabled,
      },
      className,
    );
    return (
      <button className={cls} ref={ref} {...props}>
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

export const LinkButton = forwardRef<HTMLAnchorElement, BaseProps & LinkButtonProps>(
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
      <a className={cls} ref={ref} {...props}>
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </a>
    );
  },
);

LinkButton.displayName = 'LinkButton';

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

const VariantIcon: FC<{ variant: BaseProps['variant']; fallback?: ReactNode }> = ({ variant, fallback }) => {
  return variant === 'authGoogle' ? (
    <GoogleIcon />
  ) : variant === 'authLINE' ? (
    <LINEIcon />
  ) : variant === 'authApple' ? (
    <AppleIcon />
  ) : (
    <>{fallback}</>
  );
};
