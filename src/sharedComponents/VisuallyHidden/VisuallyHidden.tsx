import { ComponentPropsWithRef, ForwardedRef } from 'react';
import styles from './VisuallyHidden.module.css';
import { fixedForwardRef } from '../../utils/component';
import { DistributiveOmit } from '../../utils/types';
import type { ElementType } from 'react';

function VisuallyHiddenInner<T extends ElementType>(
  props: {
    as?: T;
  } & DistributiveOmit<ComponentPropsWithRef<ElementType extends T ? 'span' : T>, 'as'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const { children, as: Component = 'span', className: _, ...otherProps } = props;
  return (
    <Component className={styles.visuallyHidden} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
}

export const VisuallyHidden = fixedForwardRef(VisuallyHiddenInner);
