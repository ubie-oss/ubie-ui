'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './MessageHalfModal.module.css';
import { opacityToClassName } from '../../utils/style';
import { Button } from '../Button/Button';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  /**
   * 閉じるアクションが実行された場合のコールバック
   */
  onClose: () => void;
  /**
   * ヘッダーに表示する見出しテキスト
   */
  header?: string;

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
   * 閉じるボタンを表示するかどうか
   * @default true
   */
  showClose?: boolean;
  /**
   * モーダルを開くかどうか
   * @default true
   */
  open?: boolean;
  /**
   * openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
   * @default false
   */
  isStatic?: boolean;
  /**
   * モーダルをフルスクリーンで表示するかどうか
   * @default false
   */
  fullscreen?: boolean;
  /**
   * モーダルボディ部分のスクロールを許可するかどうか
   * @default true
   */
  bodyScroll?: boolean;
};

type Props = BaseProps;

export const MessageHalfModal: FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
  header,
  closeLabel = '閉じる',
  overlayOpacity = 'normal',
  showClose = true,
  open = true,
  isStatic = false,
  fullscreen = false,
  bodyScroll = true,
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
          <div
            className={clsx(
              styles.modalBody,
              !header && styles.headerLess,
              fullscreen && styles.fullscreen,
              bodyScroll && styles.bodyScroll,
            )}
          >
            {header && <Dialog.Title className={styles.header}>{header}</Dialog.Title>}
            <div className={styles.contents}>{children}</div>
            <div className={styles.buttonContainer}>
              {showClose && (
                <Button variant="primary" onClick={onClose} aria-label={closeLabel}>
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
