import { ButtonHTMLAttributes, ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';

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

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;
export type DummyButtonProps = Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps>;
