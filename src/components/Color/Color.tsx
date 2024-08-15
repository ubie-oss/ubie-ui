import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './Color.module.css';
import { TextColor } from '../../types/style';
import { colorVariable } from '../../utils/style';

type Props = {
  /**
   * 文字色
   * @default main
   */
  color?: TextColor;
} & Omit<ComponentPropsWithRef<'span'>, 'className'>;

export const Color = forwardRef<HTMLSpanElement, Props>(({ color = 'main', children, ...otherProps }, ref) => (
  <span className={styles.color} style={{ ...colorVariable(color) }} {...otherProps} ref={ref}>
    {children}
  </span>
));

Color.displayName = 'Color';
