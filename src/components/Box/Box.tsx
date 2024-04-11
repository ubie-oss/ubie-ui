import clsx from 'clsx';
import styles from './Box.module.css';
import { Spacing, Radius, BackgroundColor } from '../../types/style';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  radius?: Radius;
  backgroundColor?: BackgroundColor;
  border?: 'gray' | 'grayThick' | 'primary' | 'primaryThick';
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
