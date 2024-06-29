import { type FC, type ReactNode } from 'react';
import styles from './Bold.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

type Props = {
  /**
   * 太字にするテキスト
   * <p>や<div>などを子要素に指定しないでください（文法的にNGです）
   *
   */
  children: ReactNode;
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

export const Bold: FC<Props> = ({ as = 'span', children, id, ...otherProps }) => {
  const BoldComponent = as;

  return (
    <BoldComponent className={styles.bold} id={id} {...otherProps}>
      {children}
    </BoldComponent>
  );
};
