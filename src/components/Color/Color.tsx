import { type FC, PropsWithChildren } from 'react';
import styles from './Color.module.css';
import { TextColor } from '../../types/style';
import { colorVariable } from '../../utils/style';
import { CustomDataAttributeProps } from '../../types/attributes';

type Props = {
  /**
   * 文字色
   * @default main
   */
  color?: TextColor;
  /**
   * ネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  id?: string;
} & CustomDataAttributeProps;

export const Color: FC<PropsWithChildren<Props>> = ({ color = 'main', children, id, ...otherProps }) => (
  <span id={id} className={styles.color} style={{ ...colorVariable(color) }} {...otherProps}>
    {children}
  </span>
);
