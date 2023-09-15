'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './ActionHalfModal.module.css';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';
import { Button } from '../Button/Button';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  onClose: () => void;
  header?: string;
  primaryActionColor?: 'primary' | 'alert';
  closeLabel?: string;
  overlayOpacity?: Opacity;
  showClose?: boolean;
  open?: boolean;
  isStatic?: boolean;
  fullscreen?: boolean;
};

type Props = BaseProps &
  AllOrNone<{ onPrimaryAction: () => void; primaryActionLabel: string }> &
  AllOrNone<{ onSecondaryAction: () => void; secondaryActionLabel: string }>;

export const ActionHalfModal: FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  header,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionColor,
  closeLabel = '閉じる',
  overlayOpacity = 'normal',
  showClose = true,
  open = true,
  isStatic = false,
  fullscreen = false,
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  return (
    <Transition show={open}>
      <Dialog static={isStatic} onClose={onClose} className={clsx(styles.modal, fullscreen && styles.fullscreen)}>
        <Transition.Child
          as={Fragment}
          enter={styles.overlayEnter}
          enterFrom={styles.overlayEnterFrom}
          enterTo={styles.overlayEnterTo}
          leave={styles.overlayLeave}
          leaveFrom={styles.overlayLeaveFrom}
          leaveTo={styles.overlayLeaveTo}
        >
          <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter={styles.panelEnter}
          enterFrom={styles.panelEnterFrom}
          enterTo={styles.panelEnterTo}
          leave={styles.panelLeave}
          leaveFrom={styles.panelLeaveFrom}
          leaveTo={styles.panelLeaveTo}
        >
          <div className={clsx(styles.modalBody, !header && styles.headerLess, fullscreen && styles.fullscreen)}>
            {header && <Dialog.Title className={styles.header}>{header}</Dialog.Title>}
            <div className={styles.contents}>{children}</div>
            <div className={styles.buttonContainer}>
              {onPrimaryAction && primaryActionLabel && (
                <Button block onClick={onPrimaryAction} aria-label={primaryActionLabel} variant={primaryActionColor}>
                  {primaryActionLabel}
                </Button>
              )}
              {onSecondaryAction && secondaryActionLabel && (
                <Button block variant="secondary" onClick={onSecondaryAction} aria-label={secondaryActionLabel}>
                  {secondaryActionLabel}
                </Button>
              )}
              {showClose && (
                <Button variant="text" onClick={onClose} aria-label={closeLabel}>
                  {closeLabel}
                </Button>
              )}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
