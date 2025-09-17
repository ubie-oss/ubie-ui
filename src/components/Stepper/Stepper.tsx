'use client';

import { type CSSProperties } from 'react';
import styles from './Stepper.module.css';
import { StepperItem } from './StepperItem';
import { marginVariables } from '../../utils/style';
import type { CustomDataAttributeProps } from '../../types/attributes';
import type { IconName } from '../../types/icon';
import type { Spacing } from '../../types/style';

export type StepStatus = 'current' | 'undone' | 'done';

export interface StepData {
  label: string;
  icon?: IconName;
  doneIcon?: IconName;
}

export interface StepperProps extends CustomDataAttributeProps {
  steps: StepData[];
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

export const Stepper = ({ steps, currentStep = 0, m, mx, my, mt, mr, mb, ml, ...props }: StepperProps) => {
  const marginStyles = marginVariables({ m, mx, my, mt, mr, mb, ml });

  return (
    <div className={styles.stepper} style={marginStyles as CSSProperties} {...props}>
      {steps.map((step, index) => {
        const status: StepStatus = index < currentStep ? 'done' : index === currentStep ? 'current' : 'undone';

        return (
          <StepperItem
            key={index}
            label={step.label}
            icon={step.icon}
            doneIcon={step.doneIcon}
            status={status}
            isFirst={index === 0}
            isLast={index === steps.length - 1}
            stepIndex={index}
            currentStep={currentStep}
          />
        );
      })}
    </div>
  );
};

export type { StepperItemProps } from './StepperItem';
