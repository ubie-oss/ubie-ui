'use client';

import { FC, MouseEvent } from 'react';
import { DiseaseAdText } from './DiseaseAdText';
import styles from './DiseaseTextAdRichButton.module.css';
import { LinkButton } from '../Button/Button';

type Props = {
  onClick: (e: MouseEvent) => void;
  ad: {
    url: string;
    label: string;
    uuid: string;
  };
};

export const DiseaseTextAdRichButton: FC<Props> = ({ onClick, ad }) => {
  return (
    <LinkButton
      id={ad.uuid}
      variant="secondary"
      size="small"
      block
      href={ad.url}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={styles.richButton}
    >
      <div>
        <DiseaseAdText>{ad.label}</DiseaseAdText>
      </div>
    </LinkButton>
  );
};
