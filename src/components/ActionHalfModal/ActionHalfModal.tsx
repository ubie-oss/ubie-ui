'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren, useCallback } from 'react';
import styles from './ActionHalfModal.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';
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
   * ネイティブ要素のid属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定
   */
  ariaLabelledby?: string;
};

type PrimaryActionProps = {
  /**
   * プライマリーアクションボタンが実行された場合のコールバック
   */
  onPrimaryAction: () => void;
  /**
   * プライマリーアクションボタンのラベル
   */
  primaryActionLabel: string;
};

type SecondaryActionProps = {
  /**
   * セカンダリーアクションボタンが実行された場合のコールバック
   */
  onSecondaryAction: () => void;
  /**
   * セカンダリーアクションボタンのラベル
   */
  secondaryActionLabel: string;
};

type Props = BaseProps & AllOrNone<PrimaryActionProps> & AllOrNone<SecondaryActionProps> & CustomDataAttributeProps;

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
  ariaLabelledby,
  ...props
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  const dialogRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && header == null && ariaLabelledby != null) {
        node.setAttribute('aria-labelledby', ariaLabelledby);
      } else if (node !== null && header == null && ariaLabelledby == null) {
        node.removeAttribute('aria-labelledby');
      }
    },
    [ariaLabelledby, header],
  );

  return (
    <Transition show={open}>
      <Dialog
        ref={dialogRef}
        static={isStatic}
        onClose={onClose}
        className={clsx(styles.modal, fullscreen && styles.fullscreen)}
        {...props}
      >
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
