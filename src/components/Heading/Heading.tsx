import { clsx } from 'clsx';
import { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';
import styles from './Heading.module.css';
import { TextColor } from '../../types/style';
import { fixedForwardRef } from '../../utils/component';
import type { DistributiveOmit } from '../../utils/types';

function HeadingBase<TAs extends ElementType>(
  props: {
    /**
     * レンダリングされる要素。ネイティブ要素のみを許可しています。
     * TypeScript上ではコンポーネントを指定できてしまいますが、実行時にエラーとなります
     * @default p
     */
    as?: TAs;
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
     * テキストのカラーバリエーション
     * @default secondary
     */
    color?: Extract<TextColor, 'main' | 'primary' | 'accent' | 'white'>;
    /**
     * 太字とするかどうか、falseの場合はnormal
     * @default true
     */
    bold?: boolean;
    /**
     * ｚ
     */
    noWrap?: boolean;
  } & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'p' : TAs>, 'as' | 'className'>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: ForwardedRef<any>,
) {
  const {
    textAlign,
    children,
    primaryIcon,
    accentIcon,
    whiteIcon,
    size = 'md',
    color = 'main',
    leadingBorder,
    as: HeadingComponent = 'p',
    bold = true,
    noWrap = false,
    ...otherProps
  } = props;
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
    <HeadingComponent className={className} {...otherProps} ref={ref}>
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
}

export const Heading = fixedForwardRef(HeadingBase);
