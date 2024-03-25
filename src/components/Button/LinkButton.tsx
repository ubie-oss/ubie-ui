'use client';

import clsx from 'clsx';
import { cloneElement, forwardRef } from 'react';
import styles from './Button.module.css';
import { VariantIcon } from './VariantIcon';
import type { LinkButtonProps } from './ButtonTypes';
import type { ReactNode } from 'react';

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      render,
      children,
      variant = 'primary',
      size = 'large',
      block = false,
      icon: _icon,
      fixedIcon: _fixedIcon,
      suffixIcon: _suffixIcon,
      href: _href,
      disabled = false,
      ...props
    },
    forwardedRef,
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
    });
    const href = disabled ? undefined : _href;

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const createElement = (props: any, children: ReactNode) => {
      return render ? cloneElement(render, props, children) : <a {...props}>{children}</a>;
    };

    return createElement(
      {
        className: cls,
        href,
        ...props,
        ref: forwardedRef,
      },
      <>
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </>,
    );
  },
);

LinkButton.displayName = 'Link';
