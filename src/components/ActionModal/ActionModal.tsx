import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './ActionModal.module.css';
import { Button } from '../../';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  onClose: () => void;
  onPrimaryAction?: () => void;
  header?: string;
  primaryActionLabel?: string;
  primaryActionColor?: 'primary' | 'alert';
  closeLabel?: string;
  overlayOpacity?: Opacity;
  fixedHeight?: boolean;
  showClose?: boolean;
  open?: boolean;
  isStatic?: boolean;
};

type Props = PropsWithChildren<BaseProps> & AllOrNone<{ onSecondaryAction: () => void; secondaryActionLabel: string }>;

export const ActionModal: FC<Props> = ({
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
  fixedHeight = false,
  showClose = true,
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
        <div className={clsx(styles.modalBody, !header && styles.headerLess, fixedHeight && styles.fixedHeight)}>
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
      </Dialog>
    </Transition>
  );
};
