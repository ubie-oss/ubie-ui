'use client';

import { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';
import styles from './Label.module.css';
import { RequiredLabel } from '../../sharedComponents/RequiredLabel/RequiredLabel';
import { fixedForwardRef } from '../../utils/component';
import type { DistributiveOmit } from '../../utils/types';

export function LabelBase<TAs extends ElementType>(
  props: {
    children: ReactNode;
    /**
     * レンダリングされる要素。ネイティブ要素のみを許可しています。
     * TypeScript上ではコンポーネントを指定できてしまいますが、コンソールエラーが表示されます
     * @default label
     */
    as?: TAs;
    /**
     * 必須マークを表示するか
     * 注意: trueとしてもinput要素のrequired属性は付与されません
     */
    showRequiredLabel?: boolean;
  } & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'label' : TAs>, 'as' | 'className' | 'children'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const { children, as: LabelComponent = 'label', showRequiredLabel, ...otherProps } = props;

  if (typeof (LabelComponent as unknown) !== 'string') {
    // eslint-disable-next-line no-console
    console.error('as prop only supports native elements.');
  }

  return (
    <LabelComponent ref={ref} className={styles.label} {...otherProps}>
      {children}
      {showRequiredLabel && <RequiredLabel />}
    </LabelComponent>
  );
}

export const Label = fixedForwardRef(LabelBase);
