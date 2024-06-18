import { clsx } from 'clsx';
import styles from './Heading.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { TextColor } from '../../types/style';
import { HTMLTagname } from '../../utils/types';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
  /**
   * テキストの配置。指定しない場合、親要素の配置を継承
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
   * xs=16px, sm=18px, md=20px, lg=24px, xl=28px
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
  as?: HTMLTagname;
  /**
   * テキストのカラーバリエーション
   * @default secondary
   */
  color?: Extract<TextColor, 'main' | 'primary' | 'accent' | 'white'>;
  /**
   * HTMLのID属性
   */
  id?: string;
  /**
   * HTMLのfor属性。label要素の場合に使用
   */
  htmlFor?: string;
  /**
   * 太字とするかどうか、falseの場合はnormal
   * @default true
   */
  bold?: boolean;
  /**
   * ｚ
   */
  noWrap?: boolean;
} & CustomDataAttributeProps;

const Heading: FC<PropsWithChildren<Props>> = ({
  textAlign,
  children,
  primaryIcon,
  accentIcon,
  whiteIcon,
  size = 'md',
  color = 'main',
  leadingBorder,
  as: HeadingComponent = 'p',
  id,
  htmlFor,
  bold = true,
  noWrap = false,
  ...otherProps
}) => {
  const className = clsx(
    styles.heading,
    primaryIcon || accentIcon || whiteIcon ? styles.hasIcon : null,
    textAlign ? styles[textAlign] : null,
    styles[size],
    // For leadingBorder, only the main text colour is supported.
    leadingBorder ? styles.secondary : styles[color],
    leadingBorder ? styles.leadingBorder : null,
    bold && styles.bold,
    noWrap && styles.noWrap,
  );

  return (
    <HeadingComponent className={className} id={id} htmlFor={htmlFor} {...otherProps}>
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
