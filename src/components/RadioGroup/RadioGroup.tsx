'use client';

import styles from './RadioGroup.module.css';
import { Flex } from '../Flex/Flex';
import { RadioButton } from '../RadioButton/RadioButton';
import { RadioCard } from '../RadioCard/RadioCard';
import type { FC, ReactElement } from 'react';

type RadioComponent = ReactElement<typeof RadioButton> | ReactElement<typeof RadioCard>;

export type Props = {
  children: RadioComponent[];
  label: string;
  direction?: 'column' | 'row';
};

export const RadioGroup: FC<Props> = ({ children, label, direction = 'column' }) => {
  const childrenIsCard = children.some((child) => child.type === RadioCard);
  const childenIsBlock = direction === 'row' || (childrenIsCard && direction === 'column');

  return (
    <fieldset className={styles.wrapper}>
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
