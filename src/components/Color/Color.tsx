import { type FC, PropsWithChildren } from 'react';
import styles from './Color.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import { TextColorVariant } from '../../types/style';
import { colorVariable } from '../../utils/style';

type Props = {
  /**
   * 文字色
   * @default main
   */
  color?: TextColorVariant;
  /**
   * ネイティブ要素のid属性。ページで固有のIDを指定
   */
  id?: string;
} & CustomDataAttributeProps;

export const Color: FC<PropsWithChildren<Props>> = ({ color = 'main', children, id, ...otherProps }) => (
  <span id={id} className={styles.color} style={{ ...colorVariable(color) }} {...otherProps}>
    {children}
  </span>
);
