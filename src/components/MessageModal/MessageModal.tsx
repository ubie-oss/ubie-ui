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
  fullscreen?: boolean;
  open?: boolean;
  isStatic?: boolean;
} & PropsWithChildren;

export const MessageModal: FC<Props> = ({
  header,
  children,
  onClose,
  overlayOpacity = 'normal',
  closeLabel = '閉じる',
  fullscreen = false,
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
        <div className={styles.modalContainer}>
          <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
          <div className={clsx(styles.modalBody, fullscreen && styles.fullscreen)}>
            {header && <Dialog.Title className={styles.header}>{header}</Dialog.Title>}
            <div className={styles.content}>{children}</div>
            <Button block onClick={onClose} aria-label={closeLabel}>
              {closeLabel}
            </Button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
