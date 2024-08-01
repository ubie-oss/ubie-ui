'use client';

import { ComponentPropsWithRef, forwardRef, useMemo } from 'react';
import styles from './RadioGroup.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
// 追加したインポート
import { Flex } from '../Flex/Flex';
import { RadioButton } from '../RadioButton/RadioButton';
import { RadioCard } from '../RadioCard/RadioCard';
import type { ReactElement } from 'react';

export type RadioGroupProps = {
  children: ReactElement<typeof RadioButton>[] | ReactElement<typeof RadioCard>[];
  /**
   * ラジオグループの見出し（legend要素）
   */
  label?: string;
  /**
   * 必須マークを表示するか
   * 注意: trueとしてもinput要素のrequired属性は付与されません
   */
  showRequiredLabel?: boolean;
  /**
   * ラジオボタンの配置方向
   * @default column
   */
  direction?: 'column' | 'row';
};

type Props = RadioGroupProps & Omit<ComponentPropsWithRef<'fieldset'>, keyof RadioGroupProps | 'className'>;

export const RadioGroup = forwardRef<HTMLFieldSetElement, Props>(
  ({ children, label, showRequiredLabel = false, direction = 'column', ...otherProps }, ref) => {
    const childrenIsCard = children.some((child) => child.type === RadioCard);
    const childenIsBlock = direction === 'row' || (childrenIsCard && direction === 'column');

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
        <Flex
          spacing={childrenIsCard ? 'sm' : 'md'}
          alignItems={childenIsBlock ? 'normal' : undefined}
          direction={direction}
          wrap={wrap}
        >
          {children}
        </Flex>
      </fieldset>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
