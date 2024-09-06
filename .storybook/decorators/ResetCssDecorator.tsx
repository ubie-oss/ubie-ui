import { type FC, type PropsWithChildren, useEffect } from 'react';

export const resetCss = {
  none: 'none',
  modernCss: 'modern css reset',
} as const;

export const ResetCssDecorator: FC<
  PropsWithChildren<{
    applyResetCss: (typeof resetCss)[keyof typeof resetCss];
  }>
> = ({ children, applyResetCss }) => {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('#reset-css');

    if (!link) {
      return;
    }

    if (applyResetCss === resetCss.modernCss) {
      link.href = '/styles/modern-css-reset.css';
    } else {
      link.href = '';
    }
  });

  return <>{children}</>;
};
