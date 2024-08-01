import { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';
import styles from './VisuallyHidden.module.css';
import { fixedForwardRef } from '../../utils/component';
import { DistributiveOmit } from '../../utils/types';

function VisuallyHiddenInner<TAs extends ElementType>(
  props: {
    /**
     * レンダリングされる要素。ネイティブ要素のみを許可しています。
     * TypeScript上ではコンポーネントを指定できてしまいますが、実行時にエラーとなります
     * @default span
     */
    as?: TAs;
  } & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'span' : TAs>, 'ref' | 'className'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const { children, as: Component = 'span', ...otherProps } = props;

  if (typeof (Component as unknown) !== 'string') {
    throw new Error('as prop only supports native elements.');
  }

  return (
    <Component className={styles.visuallyHidden} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
}

export const VisuallyHidden = fixedForwardRef(VisuallyHiddenInner);
