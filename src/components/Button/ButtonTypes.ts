import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes, ReactElement } from 'react';

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

export type OnlyLinkButtonProps = {
  disabled?: boolean;
  render?: ReactElement;
};

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & BaseProps;
export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> &
  BaseProps &
  OnlyLinkButtonProps;
