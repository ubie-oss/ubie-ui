import styles from './Flex.module.css';
import { Spacing, AlignItems, JustifyContent } from '../../types/style';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  spacing?: Spacing;
  alginItems?: AlignItems;
  justifyContent?: JustifyContent;
};

export const Flex: FC<PropsWithChildren<Props>> = ({ children, alginItems, justifyContent, spacing }) => {
  return (
    <div
      className={styles.flex}
      style={
        { '--gap': spacing, '--align-items': alginItems, '--justify-content': justifyContent } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
