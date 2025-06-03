'use client';

import { type CSSProperties, type ReactNode, Children, cloneElement, isValidElement } from 'react';
import styles from './Stepper.module.css';
import { marginVariables } from '../../utils/style';
import type { CustomDataAttributeProps } from '../../types/attributes';
import type { IconName } from '../../types/icon';
import type { Spacing } from '../../types/style';

export type StepStatus = 'current' | 'undone' | 'done';

export interface StepperProps extends CustomDataAttributeProps {
  children: ReactNode[];
  currentStep?: number;
  // Margin props
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
}

export interface StepperItemProps extends CustomDataAttributeProps {
  label: string;
  icon?: IconName;
  doneIcon?: IconName;
  // Internal props (automatically set by Stepper)
  status?: StepStatus;
  isFirst?: boolean;
  isLast?: boolean;
}

export { StepperItem } from './StepperItem';

export const Stepper = ({ children, currentStep = 0, m, mx, my, mt, mr, mb, ml, ...props }: StepperProps) => {
  const marginStyles = marginVariables({ m, mx, my, mt, mr, mb, ml });

  const enhancedChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const status: StepStatus = index < currentStep ? 'done' : index === currentStep ? 'current' : 'undone';

    return cloneElement(child, {
      ...child.props,
      status,
      isFirst: index === 0,
      isLast: index === children.length - 1,
    });
  });

  return (
    <div className={styles.stepper} style={marginStyles as CSSProperties} {...props}>
      {enhancedChildren}
    </div>
  );
};
