'use client';

import dynamic from 'next/dynamic';
import { VFC, useMemo, SVGProps } from 'react';
import styles from './DiseaseAdText.module.css';
import { parseDisplayText } from '../../utils/displayTextParser';

const FallbackIcon = () => {
  return <span className={styles.fallbackIcon} />;
};

const AmbulanceIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.AmbulanceIcon), {
  loading: FallbackIcon,
});
const CalendarIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.CalendarIcon), {
  loading: FallbackIcon,
});
const CancelIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.CloseAIcon), {
  loading: FallbackIcon,
});
const CheckCircleIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.CheckBIcon), {
  loading: FallbackIcon,
});
const CheckIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.CheckAIcon), {
  loading: FallbackIcon,
});
const ClockIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.HistoryIcon), {
  loading: FallbackIcon,
});
const ExternalLinkIcon = dynamic<SVGProps<SVGSVGElement>>(
  () => import('@ubie/ubie-icons').then((m) => m.BlankLinkIcon),
  {
    loading: FallbackIcon,
  },
);
const HospitalIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.HospitalIcon), {
  loading: FallbackIcon,
});
const MedicalNoteIcon = dynamic<SVGProps<SVGSVGElement>>(
  () => import('@ubie/ubie-icons').then((m) => m.MedicalFormIcon),
  {
    loading: FallbackIcon,
  },
);
const SearchIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.SearchIcon), {
  loading: FallbackIcon,
});
const ShareIcon = dynamic<SVGProps<SVGSVGElement>>(() => import('@ubie/ubie-icons').then((m) => m.ShareBIcon), {
  loading: FallbackIcon,
});
const StethoscopeIcon = dynamic<SVGProps<SVGSVGElement>>(
  () => import('@ubie/ubie-icons').then((m) => m.StethoscopeIcon),
  {
    loading: FallbackIcon,
  },
);

export const DiseaseAdText: VFC<{ children: string }> = ({ children }) => {
  const parsed = useMemo(() => parseDisplayText(children), [children]);

  if (parsed == null) {
    return null;
  }

  return (
    <>
      {parsed.map((value, index) => {
        switch (value) {
          case '{AmbulanceIcon}':
            return <AmbulanceIcon key={index} className={styles.ubieIcon} />;
          case '{CalendarIcon}':
            return <CalendarIcon key={index} className={styles.ubieIcon} />;
          case '{CancelIcon}':
            return <CancelIcon key={index} className={styles.ubieIconSmall} />;
          case '{CheckCircleIcon}':
            return <CheckCircleIcon key={index} className={styles.ubieIcon} />;
          case '{CheckIcon}':
            return <CheckIcon key={index} className={styles.ubieIcon} />;
          case '{ClockIcon}':
            return <ClockIcon key={index} className={styles.ubieIcon} />;
          case '{ExternalLinkIcon}':
            return <ExternalLinkIcon key={index} className={styles.ubieIconSmall} />;
          case '{HospitalIcon}':
            return <HospitalIcon key={index} className={styles.ubieIcon} />;
          case '{MedicalNoteIcon}':
            return <MedicalNoteIcon key={index} className={styles.ubieIcon} />;
          case '{SearchIcon}':
            return <SearchIcon key={index} className={styles.ubieIcon} />;
          case '{ShareIcon}':
            return <ShareIcon key={index} className={styles.ubieIconSmall} />;
          case '{StethoscopeIcon}':
            return <StethoscopeIcon key={index} className={styles.ubieIcon} />;
          case '{br}':
            return <br key={index} />;
          default:
            return value;
        }
      })}
    </>
  );
};
