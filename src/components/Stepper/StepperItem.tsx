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
  status?: StepStatus;
  isFirst?: boolean;
  isLast?: boolean;
  stepIndex?: number;
  currentStep?: number;
}

export const StepperItem = ({
  label,
  icon,
  doneIcon,
  status = 'undone',
  isFirst = false,
  isLast = false,
  stepIndex = 0,
  currentStep = 0,
  ...props
}: StepperItemProps) => {
  const renderIcon = () => {
    // カスタムアイコンが指定されている場合はそれを使用
    if (status === 'done' && doneIcon) {
      return <Icon icon={doneIcon} />;
    }
    if ((status === 'current' || status === 'undone') && icon) {
      return <Icon icon={icon} />;
    }

    // デフォルトの状態に応じた描画
    if (status === 'done') {
      // 白い丸で囲まれたチェックアイコン
      return (
        <div className={styles.doneCircle}>
          <Icon icon="CheckAIcon" />
        </div>
      );
    }

    if (status === 'current') {
      // 塗りつぶされた青い丸
      return <div className={styles.currentCircle} />;
    }

    // undone: グレーの枠の塗りつぶされていない丸
    return <div className={styles.undoneCircle} />;
  };

  const itemClass = clsx({
    [styles.stepperItem]: true,
    [styles.current]: status === 'current',
    [styles.done]: status === 'done',
    [styles.undone]: status === 'undone',
  });

  const leftBorderClass = clsx({
    [styles.leftBorder]: true,
  });

  const rightBorderClass = clsx({
    [styles.rightBorder]: true,
  });

  // 左の線: 現在のステップより左（つまり stepIndex <= currentStep）の場合は青
  const leftBorderLineClass = clsx({
    [styles.border]: true,
    [styles.hidden]: isFirst,
    [styles.borderColorBlue]: !isFirst && stepIndex <= currentStep,
    [styles.borderColorGray]: !isFirst && stepIndex > currentStep,
  });

  // 右の線: 現在のステップより左（つまり stepIndex < currentStep）の場合は青
  const rightBorderLineClass = clsx({
    [styles.border]: true,
    [styles.hidden]: isLast,
    [styles.borderColorBlue]: !isLast && stepIndex < currentStep,
    [styles.borderColorGray]: !isLast && stepIndex >= currentStep,
  });

  const labelClass = clsx({
    [styles.label]: true,
    [styles.currentLabel]: status === 'current',
    [styles.doneLabel]: status === 'done',
    [styles.undoneLabel]: status === 'undone',
  });

  return (
    <div className={itemClass} {...props}>
      <div className={styles.borderLine}>
        <div className={leftBorderClass}>
          <div className={leftBorderLineClass} />
        </div>
        <div className={styles.iconSpacer} />
        <div className={rightBorderClass}>
          <div className={rightBorderLineClass} />
        </div>
      </div>
      <div className={styles.iconWrapper}>{renderIcon()}</div>
      <div className={labelClass}>{label}</div>
    </div>
  );
};
