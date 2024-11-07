'use client';

import { ArrowBRightIcon } from '@ubie/ubie-icons';
import clsx from 'clsx';
import { cloneElement, forwardRef, isValidElement } from 'react';
import styles from './LinkCard.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import { IconName } from '../../types/icon';
import { Icon } from '../Icon/Icon';
import type { ComponentType, ReactElement, ReactNode } from 'react';

type IconProp = ComponentType | ReactElement | IconName;

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
  icon?: IconProp;
} & CustomDataAttributeProps;

// ref https://github.com/microsoft/TypeScript/issues/53178
const _isValidElement = (el: ComponentType | ReactElement): el is ReactElement => {
  return isValidElement(el);
};

const renderPropIcon = (icon: IconProp) => {
  if (icon == null) {
    return null;
  }

  if (typeof icon === 'string') {
    return <Icon icon={icon} />;
  }

  if (_isValidElement(icon)) {
    return icon;
  }

  const IconComponent = icon;
  return <IconComponent />;
};

export const LinkCard = forwardRef<HTMLAnchorElement, Props>(
  ({ title, size = 'medium', className, icon, description, render, ...props }, forwardedRef) => {
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
        {icon != null && <span className={styles.icon}>{renderPropIcon(icon)}</span>}
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
