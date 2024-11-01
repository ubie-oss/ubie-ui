'use client';

import clsx from 'clsx';
import { cloneElement, CSSProperties, forwardRef } from 'react';
import styles from './Button.module.css';
import { useIcon } from './useIcon';
import { marginVariables } from '../../utils/style';
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
      icon,
      prefixIcon: _prefixIcon,
      fixedIcon: _fixedIcon,
      suffixIcon: _suffixIcon,
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
    forwardedRef,
  ) => {
    const prefixIcon = useIcon(icon || _prefixIcon, variant);
    const fixedIcon = useIcon(_fixedIcon, variant);
    const suffixIcon = useIcon(_suffixIcon, variant);
    const cls = clsx({
      [styles.button]: true,
      [styles[variant]]: true,
      [styles[size]]: true,
      [styles.block]: block,
    });

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const createElement = (props: any, children: ReactNode) => {
      return render ? cloneElement(render, props, children) : <a {...props}>{children}</a>;
    };

    return createElement(
      {
        className: cls,
        style: {
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
        } as CSSProperties,
        ...props,
        ref: forwardedRef,
      },
      <>
        {fixedIcon && <span className={styles.fixedIcon}>{fixedIcon}</span>}
        <span className={styles.label}>
          {prefixIcon && <span className={styles.icon}>{prefixIcon}</span>}
          {children}
          {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
        </span>
      </>,
    );
  },
);

LinkButton.displayName = 'Link';
