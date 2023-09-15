'use client';

import { BlankLinkIcon } from '@ubie/ubie-icons';
import Image, { ImageProps } from 'next/image';
import { ComponentType, FC, MouseEvent } from 'react';
import { DiseaseAdText } from './DiseaseAdText';
import styles from './DiseaseTextAdSummaryButton.module.css';

type ImageComponentType = ComponentType<
  Pick<ImageProps, 'src' | 'alt' | 'className' | 'width' | 'height' | 'children'>
>;

type Props = {
  onClick: (e: MouseEvent) => void;
  ad: {
    url: string;
    label: string;
    imageUrl: string | null;
  };
  ImageComponent?: ImageComponentType;
};

export const DiseaseTextAdSummaryButton: FC<Props> = ({ onClick, ad, ImageComponent = Image }) => {
  const imageElement = ad.imageUrl?.startsWith('https://ubie.app/') ? (
    <ImageComponent
      src={ad.imageUrl}
      alt={`${ad.label}のサマリー画像`}
      className={styles.bannerImage}
      width={400}
      height={400}
    />
  ) : ad.imageUrl ? (
    <img src={ad.imageUrl || ''} alt={`${ad.label}のサマリー画像`} className={styles.bannerImage} decoding="async" />
  ) : null; // summary では ad.imageUrl は空にならないはず。万が一の場合に mabl で拾いやすいよう、img タグ自体を描画しないようにしとく

  return (
    <a href={ad.url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <div className={styles.summaryCard}>
        {imageElement}
        <div className={styles.summaryCardBody}>
          <div className={styles.siteTitle}>
            <DiseaseAdText>{ad.label}</DiseaseAdText>
          </div>
          <div className={styles.siteUrl}>
            <div className={styles.siteUrlText}>{ad.url}</div>
            <div className={styles.siteUrlIcon}>
              <BlankLinkIcon />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
