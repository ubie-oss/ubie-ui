import { clsx } from 'clsx';
import styles from './Heading.module.css';
import { HTMLTagname } from '../../utils/types';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
  /**
   * テキストの配置
   * @default left
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * アイコン。プライマラーカラーで表示。icon propはどれかひとつのみを指定してください
   */
  primaryIcon?: ReactNode;
  /**
   * アイコン。アクセントカラーで表示。icon propはどれかひとつのみを指定してください
   */
  accentIcon?: ReactNode;
  /**
   * アイコン。ホワイトカラーで表示。icon propはどれかひとつのみを指定してください
   */
  whiteIcon?: ReactNode;
  /**
   * サイズ。Typographyトークンの値を指定
   * @default md
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * 行の先頭にボーダーを表示
   * @default false
   */
  leadingBorder?: boolean;
  /**
   * レンダリングされるHTML要素
   * @default p
   */
  as: HTMLTagname;
  /**
   * テキストのカラーバリエーション
   * @default secondary
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
  /**
   * HTMLのID属性
   */
  id?: string;
  /**
   * HTMLのfor属性。label要素の場合に使用
   */
  htmlFor?: string;
};

const Heading: FC<PropsWithChildren<Props>> = ({
  textAlign = 'left',
  children,
  primaryIcon,
  accentIcon,
  whiteIcon,
  size = 'md',
  variant = 'secondary',
  leadingBorder,
  as: HeadingComponent = 'p',
  id,
  htmlFor,
}) => {
  const className = clsx(
    styles.heading,
    primaryIcon || accentIcon || whiteIcon ? styles.hasIcon : null,
    styles[textAlign],
    styles[size],
    leadingBorder ? styles.secondary : styles[variant],
    leadingBorder ? styles.leadingBorder : null,
  );

  return (
    <HeadingComponent className={className} id={id} htmlFor={htmlFor}>
      {primaryIcon && (
        <span aria-hidden className={clsx(styles.icon, styles.primary)}>
          {primaryIcon}
        </span>
      )}
      {accentIcon && (
        <span aria-hidden className={clsx(styles.icon, styles.accent)}>
          {accentIcon}
        </span>
      )}
      {whiteIcon && (
        <span aria-hidden className={clsx(styles.icon, styles.white)}>
          {whiteIcon}
        </span>
      )}
      {children}
    </HeadingComponent>
  );
};

Heading.displayName = 'Heading';

export { Heading };
