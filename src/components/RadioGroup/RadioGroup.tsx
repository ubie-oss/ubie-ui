'use client';

import styles from './RadioGroup.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { Flex } from '../Flex/Flex';
import { RadioButton } from '../RadioButton/RadioButton';
import { RadioCard } from '../RadioCard/RadioCard';
import type { FC, ReactElement } from 'react';

type RadioComponent = ReactElement<typeof RadioButton> | ReactElement<typeof RadioCard>;

export type Props = {
  children: RadioComponent[];
  /**
   * ラジオグループの見出し（legend要素）
   */
  label: string;
  /**
   * ラジオボタンの配置方向
   * @default column
   */
  direction?: 'column' | 'row';
} & CustomDataAttributeProps;

export const RadioGroup: FC<Props> = ({ children, label, direction = 'column', ...otherProps }) => {
  const childrenIsCard = children.some((child) => child.type === RadioCard);
  const childenIsBlock = direction === 'row' || (childrenIsCard && direction === 'column');

  return (
    <fieldset className={styles.wrapper} {...otherProps}>
      <legend className={styles.legend}>{label}</legend>
      <Flex
        spacing={childrenIsCard ? 'sm' : 'md'}
        alignItems={childenIsBlock ? 'normal' : undefined}
        direction={direction}
      >
        {children}
      </Flex>
    </fieldset>
  );
};
