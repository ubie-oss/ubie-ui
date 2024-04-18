'use client';

import styles from './CheckboxGroup.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import type { FC, ReactElement } from 'react';

export type Props = {
  children: ReactElement<typeof Checkbox>[];
  label: string;
  direction?: 'column' | 'row';
};

export const CheckboxGroup: FC<Props> = ({ children, label, direction = 'column' }) => {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>{label}</legend>
      <Flex spacing="md" direction={direction}>
        {children}
      </Flex>
    </fieldset>
  );
};
