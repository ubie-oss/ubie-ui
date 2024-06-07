'use client';

import { forwardRef } from 'react';
import styles from './RadioGroup.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { Flex } from '../Flex/Flex';
import { RadioButton } from '../RadioButton/RadioButton';
import { RadioCard } from '../RadioCard/RadioCard';
import type { ReactElement } from 'react';

type RadioComponent = ReactElement<typeof RadioButton> | ReactElement<typeof RadioCard>;

export type Props = {
  children: RadioComponent[];
  /**
   * ラジオグループの見出し（legend要素）
   */
  label: string;
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
} & CustomDataAttributeProps;

export const RadioGroup = forwardRef<HTMLFieldSetElement, Props>(
  ({ children, label, showRequiredLabel = false, direction = 'column', ...otherProps }, ref) => {
    const childrenIsCard = children.some((child) => child.type === RadioCard);
    const childenIsBlock = direction === 'row' || (childrenIsCard && direction === 'column');

    return (
      <fieldset className={styles.wrapper} ref={ref} {...otherProps}>
        <legend className={styles.legend}>
          {label}
          {showRequiredLabel && <RequiredLabel />}
        </legend>
        <Flex
          spacing={childrenIsCard ? 'sm' : 'md'}
          alignItems={childenIsBlock ? 'normal' : undefined}
          direction={direction}
        >
          {children}
        </Flex>
      </fieldset>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
