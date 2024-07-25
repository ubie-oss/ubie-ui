'use client';

import { ComponentPropsWithRef, forwardRef, useMemo } from 'react';
import styles from './CheckboxGroup.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxCard } from '../CheckboxCard/CheckboxCard';
import { Flex } from '../Flex/Flex';
import type { ReactElement } from 'react';

/**
 * チェックボックス系コンポーネントをグルーピングするコンテナー
 */
export type Props = {
  /**
   * チェックボックス系のコンポーネント
   */
  children: ReactElement<typeof Checkbox>[] | ReactElement<typeof CheckboxCard>[];
  /**
   * グループの見出し
   */
  label?: string;
  /**
   * 必須ラベルの表示
   */
  showRequiredLabel?: boolean;
  /**
   * 配置方向
   */
  direction?: 'column' | 'row';
} & Omit<ComponentPropsWithRef<'fieldset'>, 'className'>;

const includesCheckboxCard = (children: Props['children']): boolean => {
  return children.some((child) => child.type === CheckboxCard);
};

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, Props>(
  ({ children, label, showRequiredLabel, direction = 'column', ...otherProps }, ref) => {
    const spacing = useMemo(() => {
      return includesCheckboxCard(children) ? 'sm' : 'md';
    }, [children]);

    const wrap = useMemo(() => {
      return direction === 'row';
    }, [direction]);

    return (
      <fieldset className={styles.wrapper} ref={ref} {...otherProps}>
        {label && (
          <legend className={styles.legend}>
            {label}
            {showRequiredLabel && <RequiredLabel />}
          </legend>
        )}
        <Flex spacing={spacing} direction={direction} wrap={wrap}>
          {children}
        </Flex>
      </fieldset>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
