import { type FC, PropsWithChildren } from 'react';
import styles from './Bold.module.css';

type Props = {
  as?: 'span' | 'b' | 'strong' | 'em' | 'i';
};

export const Bold: FC<PropsWithChildren<Props>> = ({ as = 'span', children }) => {
  const BoldComponent = as;

  return <BoldComponent className={styles.bold}>{children}</BoldComponent>;
};
