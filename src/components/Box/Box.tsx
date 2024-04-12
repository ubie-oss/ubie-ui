import clsx from 'clsx';
import styles from './Box.module.css';
import { Spacing, Radius, BackgroundColor } from '../../types/style';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  /**
   * padding-topの値。Spacing Tokenのキーを指定
   */
  pt?: Spacing;
  /**
   * padding-rightの値。Spacing Tokenのキーを指定
   */
  pr?: Spacing;
  /**
   * padding-bottomの値。Spacing Tokenのキーを指定
   */
  pb?: Spacing;
  /**
   * padding-leftの値。Spacing Tokenのキーを指定
   */
  pl?: Spacing;
  /**
   * margin-topの値。Spacing Tokenのキーを指定
   */
  mt?: Spacing;
  /**
   * margin-rightの値。Spacing Tokenのキーを指定
   */
  mr?: Spacing;
  /**
   * margin-bottomの値。Spacing Tokenのキーを指定
   */
  mb?: Spacing;
  /**
   * margin-leftの値。Spacing Tokenのキーを指定
   */
  ml?: Spacing;
  /**
   * 角丸を指定。Radius Tokenのキーを指定
   */
  radius?: Radius;
  /**
   * 背景色
   */
  backgroundColor?: BackgroundColor;
  /**
   * ボーダーの種類
   */
  border?: 'gray' | 'grayThick' | 'primary' | 'primaryThick';
  /**
   * 幅を指定。他のスタイルの影響を受け、幅が100%とならない場合にのみ使用
   */
  width?: 'full';
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Box: FC<PropsWithChildren<Props>> = ({
  children,
  pt,
  pr,
  pb,
  pl,
  mt,
  mr,
  mb,
  ml,
  radius,
  backgroundColor,
  border,
  width,
}) => {
  return (
    <div
      className={clsx([
        styles.box,
        pt && styles[`pt${capitalize(pt)}`],
        pr && styles[`pr${capitalize(pr)}`],
        pb && styles[`pb${capitalize(pb)}`],
        pl && styles[`pl${capitalize(pl)}`],
        mt && styles[`mt${capitalize(mt)}`],
        mr && styles[`mr${capitalize(mr)}`],
        mb && styles[`mb${capitalize(mb)}`],
        ml && styles[`ml${capitalize(ml)}`],
        radius && styles[`radius${capitalize(radius)}`],
        backgroundColor && styles[`backgroundColor${capitalize(backgroundColor)}`],
        border && styles[`border${capitalize(border)}`],
        width && styles.widthFull,
      ])}
    >
      {children}
    </div>
  );
};
