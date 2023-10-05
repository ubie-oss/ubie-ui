'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './MessageModal.module.css';
import { Button } from '../../';
import { opacityToClassName } from '../../utils/style';

type Opacity = 'normal' | 'darker';

type Props = {
  header?: string;
  onClose: () => void;
  closeLabel?: string;
  overlayOpacity?: Opacity;
  fixedHeight?: boolean;
  open?: boolean;
  isStatic?: boolean;
} & PropsWithChildren;

export const MessageModal: FC<Props> = ({
  header,
  children,
  onClose,
  overlayOpacity = 'normal',
  closeLabel = '閉じる',
  fixedHeight = false,
  open = true,
  isStatic = false,
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  return (
    <Transition
      show={open}
      as={Fragment}
      enter={styles.panelEnter}
      enterFrom={styles.panelEnterFrom}
      enterTo={styles.panelEnterTo}
      leave={styles.panelLeave}
      leaveFrom={styles.panelLeaveFrom}
      leaveTo={styles.panelLeaveTo}
    >
      <Dialog static={isStatic} onClose={onClose} className={styles.modal}>
        <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
        <div className={clsx(styles.modalBody, fixedHeight && styles.fixedHeight)}>
          {header && <Dialog.Title className={styles.header}>{header}</Dialog.Title>}
          <div className={styles.contents}>{children}</div>
          <Button block onClick={onClose} aria-label={closeLabel}>
            {closeLabel}
          </Button>
        </div>
      </Dialog>
    </Transition>
  );
};
