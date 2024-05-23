import { type FC, PropsWithChildren } from 'react';
import styles from './Color.module.css';
import { TextColor } from '../../types/style';
import { colorVariable } from '../../utils/style';

type Props = {
  /**
   * 文字色
   * @default main
   */
  color?: TextColor;
};

export const Color: FC<PropsWithChildren<Props>> = ({ color = 'main', children }) => (
  <span className={styles.color} style={{ ...colorVariable(color) }}>
    {children}
  </span>
);
