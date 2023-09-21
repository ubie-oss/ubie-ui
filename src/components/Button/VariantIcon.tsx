import { ReactNode, FC } from 'react';
import { AppleIcon } from '../../icons/AppleIcon';
import { GoogleIcon } from '../../icons/GoogleIcon';
import { LINEIcon } from '../../icons/LINEIcon';
import type { BaseProps } from './ButtonTypes';

export const VariantIcon: FC<{ variant: BaseProps['variant']; fallback?: ReactNode }> = ({ variant, fallback }) => {
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
