'use client';

import { clsx } from 'clsx';
import styles from './Stepper.module.css';
import { Icon } from '../Icon/Icon';
import type { StepStatus } from './Stepper';
import type { CustomDataAttributeProps } from '../../types/attributes';
import type { IconName } from '../../types/icon';

export interface StepperItemProps extends CustomDataAttributeProps {
  label: string;
  icon?: IconName;
  doneIcon?: IconName;
  // Internal props (automatically set by Stepper)
  status?: StepStatus;
  isFirst?: boolean;
  isLast?: boolean;
}

export const StepperItem = ({
  label,
  icon,
  doneIcon,
  status = 'undone',
  isFirst = false,
  isLast = false,
  ...props
}: StepperItemProps) => {
  const getIcon = (): IconName => {
    if (status === 'done' && doneIcon) {
      return doneIcon;
    }
    if (status === 'done') {
      return 'CheckAIcon';
    }
    if (status === 'current' && icon) {
      return icon;
    }
    if (status === 'current') {
      return 'UbieIcon'; // Use a valid icon name
    }
    // undone
    if (icon) {
      return icon;
    }
    return 'UbieIcon'; // Use a valid icon name
  };

  const itemClass = clsx({
    [styles.stepperItem]: true,
    [styles.current]: status === 'current',
    [styles.done]: status === 'done',
    [styles.undone]: status === 'undone',
  });

  const iconAreaClass = clsx({
    [styles.iconArea]: true,
  });

  const leftBorderClass = clsx({
    [styles.leftBorder]: true,
    [styles.hidden]: isFirst,
  });

  const rightBorderClass = clsx({
    [styles.rightBorder]: true,
    [styles.hidden]: isLast,
  });

  const labelClass = clsx({
    [styles.label]: true,
    [styles.currentLabel]: status === 'current',
    [styles.doneLabel]: status === 'done',
    [styles.undoneLabel]: status === 'undone',
  });

  return (
    <div className={itemClass} {...props}>
      <div className={iconAreaClass}>
        <div className={leftBorderClass}>
          <div className={styles.border} />
        </div>
        <div className={styles.iconWrapper}>
          <Icon icon={getIcon()} />
        </div>
        <div className={rightBorderClass}>
          <div className={styles.border} />
        </div>
      </div>
      <div className={labelClass}>{label}</div>
    </div>
  );
};
