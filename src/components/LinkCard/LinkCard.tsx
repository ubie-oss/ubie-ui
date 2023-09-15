'use client';

import { UrlObject } from 'url';
import clsx from 'clsx';
import { ComponentType, ElementType, FC, ReactNode } from 'react';
import styles from './LinkCard.module.css';

type Props = {
  href: string;
  title: string;
  description: string;
  className?: string;
  linkComponent?: ElementType<{ href: string | UrlObject; className?: string; children: ReactNode }>;
  icon?: ComponentType<{ className?: string }>;
};

export const LinkCard: FC<Props> = ({
  href,
  title,
  className,
  icon: IconComponent,
  description,
  linkComponent: LinkComponent = 'a',
}) => {
  return (
    <LinkComponent href={href} className={clsx(styles.card, className)}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </LinkComponent>
  );
};

LinkCard.displayName = 'LinkCard';
