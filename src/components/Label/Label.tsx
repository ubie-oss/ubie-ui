'use client';

import styles from './Label.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
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
  /**
   * 必須マークを表示するか
   * 注意: trueとしてもinput要素のrequired属性は付与されません
   */
  showRequiredLabel?: boolean;
};

export const Label: FC<Props> = ({ children, as: LabelComponent = 'label', htmlFor, showRequiredLabel }) => {
  return (
    <LabelComponent htmlFor={htmlFor} className={styles.label}>
      {children}
      {showRequiredLabel && <RequiredLabel />}
    </LabelComponent>
  );
};
