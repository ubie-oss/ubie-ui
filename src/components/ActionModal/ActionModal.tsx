'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, PropsWithChildren } from 'react';
import styles from './ActionModal.module.css';
import { Button } from '../../';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  /**
   * 閉じるアクションが実行された場合のコールバック
   */
  onClose: () => void;
  /**
   * プライマリーアクションボタンが実行された場合のコールバック
   */
  onPrimaryAction?: () => void;
  /**
   * ヘッダーに表示する見出しテキスト
   */
  header?: string;
  /**
   * プライマリーアクションボタンのラベル
   */
  primaryActionLabel?: string;
  /**
   * プライマリーアクションボタンのカラースキーム
   */
  primaryActionColor?: 'primary' | 'alert';
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
   * 閉じるボタンを表示するかどうか
   * @default true
   */
  showClose?: boolean;
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
};

type SecondaryActionProps = {
  /**
   * セカンダリーアクションが実行された場合のコールバック
   */
  onSecondaryAction: () => void;
  /**
   * セカンダリーアクションボタンのラベル
   */
  secondaryActionLabel: string;
};

type Props = PropsWithChildren<BaseProps> & AllOrNone<SecondaryActionProps>;

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
              <Button block onClick={onPrimaryAction} variant={primaryActionColor}>
                {primaryActionLabel}
              </Button>
            )}
            {onSecondaryAction && secondaryActionLabel && (
              <Button block variant="secondary" onClick={onSecondaryAction}>
                {secondaryActionLabel}
              </Button>
            )}
            {showClose && (
              <Button variant="text" onClick={onClose}>
                {closeLabel}
              </Button>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
