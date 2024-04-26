import { FC } from 'react';
import styles from './CircularProgress.module.css';

const CIRCLE_SIZE = 44;
const THICKNESS = 3.6;

export const CircularProgress: FC = ({ ...props }) => {
  return (
    <span role="progressbar" className={styles.root} {...props}>
      <svg viewBox={`${CIRCLE_SIZE / 2} ${CIRCLE_SIZE / 2} ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}>
        <circle
          className={styles.circle}
          cx={CIRCLE_SIZE}
          cy={CIRCLE_SIZE}
          r={(CIRCLE_SIZE - THICKNESS) / 2}
          fill="none"
          strokeWidth={THICKNESS}
        />
      </svg>
    </span>
  );
};
