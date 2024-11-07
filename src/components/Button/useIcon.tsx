import { useMemo } from 'react';
import { VariantIcon } from './VariantIcon';
import { Icon } from '../Icon/Icon';
import type { ButtonProps } from './ButtonTypes';

export function useIcon(icon: ButtonProps['icon'], variant: ButtonProps['variant']) {
  return useMemo(() => {
    if (icon === 'default') {
      return <VariantIcon variant={variant} />;
    } else if (typeof icon === 'string') {
      return <Icon icon={icon}></Icon>;
    } else {
      return icon;
    }
  }, [icon, variant]);
}
