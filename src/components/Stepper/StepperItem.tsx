import clsx from 'clsx';
import { FC } from 'react';
import styles from './StepperItem.module.css';
import { Icon } from '../Icon/Icon';
import type { Props as StepProps } from './Stepper';
import type { Item } from './types';

type Props = { index: number } & Item & Pick<StepProps, 'current' | 'doneIcon'>;

export const StepperItem: FC<Props> = ({ icon, doneIcon, current, index, label }) => {
  const undoneIcon = icon ?? 'CircleOutlineIcon';
  const _doneIcon = doneIcon ?? 'CheckBIcon';
  const currentIcon = icon ?? 'CircleFillIcon';

  const isCurrent = index === current;
  const undone = index > current;

  return (
    <li className={styles.item}>
      <div className={styles.itemInner}>
        <span className={clsx(styles.icon, undone && styles.undone)}>
          {isCurrent ? (
            <Icon size="md" icon={currentIcon} />
          ) : undone ? (
            <Icon size="md" icon={undoneIcon} />
          ) : (
            <Icon size="md" icon={_doneIcon} />
          )}
        </span>
        <span className={clsx(styles.name, isCurrent && styles.current)}>{label}</span>
      </div>
    </li>
  );
};
