import { forwardRef, HTMLAttributes } from 'react';
import styles from './Stepper.module.css';
import { StepperItem } from './StepperItem';
import { Item } from './types';
import { IconName } from '../../types/icon';

export type Props = {
  items: Array<Item>;
  doneIcon?: IconName;
  current: number;
} & Omit<HTMLAttributes<HTMLOListElement>, 'className'>;

export const Stepper = forwardRef<HTMLOListElement, Props>(function Step({ items, current, doneIcon, ...rest }, ref) {
  return (
    <ol {...rest} ref={ref} className={styles.wrapper}>
      {items.map((item, index) => (
        <StepperItem key={index} index={index} current={current} doneIcon={doneIcon} {...item} />
      ))}
    </ol>
  );
});

Stepper.displayName = 'Stepper';
