'use client';

import React from 'react';
import styles from './RequiredLabel.module.css';

export const RequiredLabel: React.FC = () => {
  return <span className={styles.required}>必須</span>;
};
