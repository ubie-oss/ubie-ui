'use client';

import { forwardRef } from 'react';
import styles from './CheckboxGroup.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
import { CustomDataAttributeProps } from '../../types/attributes';
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import type { ReactElement } from 'react';

export type Props = {
  children: ReactElement<typeof Checkbox>[];
  label: string;
  showRequiredLabel?: boolean;
  direction?: 'column' | 'row';
} & CustomDataAttributeProps;

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, Props>(
  ({ children, label, showRequiredLabel, direction = 'column', ...otherProps }, ref) => {
    return (
      <fieldset className={styles.wrapper} ref={ref} {...otherProps}>
        <legend className={styles.legend}>
          {label}
          {showRequiredLabel && <RequiredLabel />}
        </legend>
        <Flex spacing="md" direction={direction}>
          {children}
        </Flex>
      </fieldset>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
