'use client';

import { UrlObject } from 'url';
import { ArrowBRightIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { ComponentType, ElementType, FC, ReactNode } from 'react';
import styles from './LinkCard.module.css';

type Props = {
  /**
   * 遷移先URL
   */
  href: string;
  /**
   * サイズ
   */
  size?: 'medium' | 'small';
  /**
   * 見出しのテキスト
   */
  title: string;
  /**
   * 説明のテキスト
   */
  description?: string;
  /**
   * CSSのクラス
   */
  className?: string;
  /**
   * リンクとして機能させるコンポーネント、または `<a>` 要素
   * @default a
   */
  linkComponent?: ElementType<{ href: string | UrlObject; className?: string; children: ReactNode }>;
  /**
   * アイコン
   */
  icon?: ComponentType<{ className?: string }>;
};

export const LinkCard: FC<Props> = ({
  href,
  title,
  size = 'medium',
  className,
  icon: IconComponent,
  description,
  linkComponent: LinkComponent = 'a',
}) => {
  return (
    <LinkComponent href={href} className={clsx(styles[size], styles.card, className)}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <ArrowBRightIcon className={styles.caret} />
    </LinkComponent>
  );
};

LinkCard.displayName = 'LinkCard';
