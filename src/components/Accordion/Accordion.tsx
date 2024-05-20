'use client';

import { ArrowBDownIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import styles from './Accordion.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';

export type Size = 'small' | 'medium';

type Props = {
  /**
   * 見出しに表示するテキスト
   */
  header: string;
  /**
   * サイズ
   * @default medium
   */
  size?: Size;
  /**
   * ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * 開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定
   */
  buttonId?: string;
} & CustomDataAttributeProps;

export const Accordion: FC<PropsWithChildren<Props>> = ({
  header,
  children,
  size = 'medium',
  id,
  buttonId,
  ...props
}) => {
  return (
    <details className={clsx(styles.container, styles[size])} id={id} {...props}>
      <summary id={buttonId} className={styles.button}>
        <span>{header}</span>
        <ArrowBDownIcon aria-hidden className={styles.arrow} />
      </summary>
      <div className={styles.panel}>{children}</div>
    </details>
  );
};
