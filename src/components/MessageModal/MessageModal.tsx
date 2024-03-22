'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './MessageModal.module.css';
import { opacityToClassName } from '../../utils/style';
import { Button } from '../Button/Button';

type Opacity = 'normal' | 'darker';

type Props = {
  /**
   * プライマリーアクションボタンのラベル
   */
  header?: string;
  /**
   * 閉じるアクションが実行された場合のコールバック
   */
  onClose: () => void;
  /**
   * 閉じるボタンのラベル
   * @default 閉じる
   */
  closeLabel?: string;
  /**
   * オーバーレイの透過度
   * @default normal
   */
  overlayOpacity?: Opacity;
  /**
   * 画面を占有する高さで固定するかどうか
   * @default false
   */
  fixedHeight?: boolean;
  /**
   * モーダルダイアログを開くかどうか
   * @default true
   */
  open?: boolean;
  /**
   * openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
   * @default false
   */
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
