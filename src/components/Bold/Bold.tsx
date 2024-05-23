import { type FC, PropsWithChildren } from 'react';
import styles from './Bold.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

type Props = {
  /**
   * レンダリングされる要素
   * @default span
   */
  as?: 'span' | 'b' | 'strong' | 'em' | 'i';
  /**
   * ネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  id?: string;
} & CustomDataAttributeProps;

export const Bold: FC<PropsWithChildren<Props>> = ({ as = 'span', children, id, ...otherProps }) => {
  const BoldComponent = as;

  return <BoldComponent className={styles.bold} id={id} {...otherProps}>{children}</BoldComponent>;
};
