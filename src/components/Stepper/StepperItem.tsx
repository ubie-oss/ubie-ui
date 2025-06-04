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
  __internal_status?: StepStatus;
  __internal_isFirst?: boolean;
  __internal_isLast?: boolean;
  __internal_stepIndex?: number;
  __internal_currentStep?: number;
}

export const StepperItem = ({
  label,
  icon,
  doneIcon,
  __internal_status = 'undone',
  __internal_isFirst = false,
  __internal_isLast = false,
  __internal_stepIndex = 0,
  __internal_currentStep = 0,
  ...props
}: StepperItemProps) => {
  const renderIcon = () => {
    // カスタムアイコンが指定されている場合はそれを使用
    if (__internal_status === 'done' && doneIcon) {
      return <Icon icon={doneIcon} />;
    }
    if ((__internal_status === 'current' || __internal_status === 'undone') && icon) {
      return <Icon icon={icon} />;
    }

    // デフォルトの状態に応じた描画
    if (__internal_status === 'done') {
      // 白い丸で囲まれたチェックアイコン
      return (
        <div className={styles.doneCircle}>
          <Icon icon="CheckAIcon" />
        </div>
      );
    }

    if (__internal_status === 'current') {
      // 塗りつぶされた青い丸
      return <div className={styles.currentCircle} />;
    }

    // undone: グレーの枠の塗りつぶされていない丸
    return <div className={styles.undoneCircle} />;
  };

  const itemClass = clsx({
    [styles.stepperItem]: true,
    [styles.current]: __internal_status === 'current',
    [styles.done]: __internal_status === 'done',
    [styles.undone]: __internal_status === 'undone',
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
    [styles.hidden]: __internal_isFirst,
    [styles.borderColorBlue]: !__internal_isFirst && __internal_stepIndex <= __internal_currentStep,
    [styles.borderColorGray]: !__internal_isFirst && __internal_stepIndex > __internal_currentStep,
  });

  // 右の線: 現在のステップより左（つまり stepIndex < currentStep）の場合は青
  const rightBorderLineClass = clsx({
    [styles.border]: true,
    [styles.hidden]: __internal_isLast,
    [styles.borderColorBlue]: !__internal_isLast && __internal_stepIndex < __internal_currentStep,
    [styles.borderColorGray]: !__internal_isLast && __internal_stepIndex >= __internal_currentStep,
  });

  const labelClass = clsx({
    [styles.label]: true,
    [styles.currentLabel]: __internal_status === 'current',
    [styles.doneLabel]: __internal_status === 'done',
    [styles.undoneLabel]: __internal_status === 'undone',
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
