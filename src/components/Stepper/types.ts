import { ReactNode } from 'react';
import { IconName } from '../../types/icon';

export type Item = {
  icon?: IconName;
  label: ReactNode;
};
