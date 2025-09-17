import { clsx } from 'clsx';
import styles from './Heading.module.css';
import { CustomDataAttributeProps } from '../../types/attributes'; // 追加したインポート
import { HeadingFontSize, TextColorVariant } from '../../types/style';
import { HTMLTagname } from '../../utils/types';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  /**
   * テキストの配置。指定しない場合、親要素の配置を継承
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * サイズ。Typographyトークンの値を指定
   * xs=16px, sm=18px, md=20px, lg=24px, xl=28px
   * @default md
   */
  size?: HeadingFontSize;
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
  color?: Extract<TextColorVariant, 'main' | 'white'>;
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
   * 領域が狭い場合でも折り返えさない
   */
  noWrap?: boolean;
} & CustomDataAttributeProps;

const Heading: FC<PropsWithChildren<Props>> = ({
  textAlign,
  children,
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
      {children}
    </HeadingComponent>
  );
};

Heading.displayName = 'Heading';

export { Heading };
