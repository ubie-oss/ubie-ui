import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes, ReactElement } from 'react';

export type BaseProps = {
  /**
   * ボタンの種類
   * @default primary
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'alert'
    | 'text'
    | 'textAlert'
    | 'authGoogle'
    | 'authLINE'
    | 'authApple';
  /**
   * 種類
   * @default large
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * 横幅を100%占有するかどうか
   * @default false
   */
  block?: boolean;
  /**
   * アイコン
   */
  icon?: 'default' | ReactNode;
  /**
   * Fixedアイコン
   */
  fixedIcon?: 'default' | ReactNode;
  /**
   * 後方配置のアイコン
   */
  suffixIcon?: 'default' | ReactNode;
  /**
   * ボタンを無効化するかどうか
   */
  disabled?: boolean;
};

export type OnlyButtonProps = {
  /**
   * ネイティブのbutton要素のtype属性
   * @default button
   */
  type?: HTMLButtonElement['type'];
};

export type OnlyLinkButtonProps = {
  /**
   * レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定
   */
  render?: ReactElement;
};

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps & keyof OnlyButtonProps> &
  BaseProps &
  OnlyButtonProps;
export type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> &
  BaseProps &
  OnlyLinkButtonProps;
