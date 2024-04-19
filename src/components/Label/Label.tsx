'use client';

import styles from './Label.module.css';
import type { ElementType, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /**
   * レンダリングされるHTML要素
   * @default label
   */
  as?: ElementType<{ className?: string; children: ReactNode }> | 'label' | 'p';
  /**
   * ラベルが紐づくフォーム要素のid属性。asにlabelを指定した場合に必用
   */
  htmlFor?: string;
};

export const Label: FC<Props> = ({ children, as: LabelComponent = 'label', htmlFor }) => {
  return (
    <LabelComponent htmlFor={htmlFor} className={styles.label}>
      {children}
    </LabelComponent>
  );
};
