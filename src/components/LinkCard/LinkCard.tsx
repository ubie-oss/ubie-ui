'use client';

import { ArrowBRightIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { cloneElement, forwardRef } from 'react';
import styles from './LinkCard.module.css';
import type { ComponentType, ReactElement, ReactNode } from 'react';

type Props = {
  /**
   * 遷移先URL
   */
  href?: string;
  /**
   * サイズ
   * @default medium
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
   * * @deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください
   */
  className?: string;
  /**
   * レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定
   */
  render?: ReactElement;
  /**
   * アイコン
   */
  icon?: ComponentType<{ className?: string }>;
};

export const LinkCard = forwardRef<HTMLAnchorElement, Props>(
  ({ title, size = 'medium', className, icon: IconComponent, description, render, ...props }, forwardedRef) => {
    const cls = clsx(styles[size], styles.card, className);

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const createElement = (props: any, children: ReactNode) => {
      return render ? cloneElement(render, props, children) : <a {...props}>{children}</a>;
    };

    return createElement(
      {
        className: cls,
        ...props,
        ref: forwardedRef,
      },
      <>
        {IconComponent && <IconComponent className={styles.icon} />}
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <ArrowBRightIcon className={styles.caret} />
      </>,
    );
  },
);

LinkCard.displayName = 'LinkCard';
