'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren, ReactNode, useCallback, useRef } from 'react';
import styles from './ActionHalfModal.module.css';
import { VisuallyHidden } from '../../sharedComponents/VisuallyHidden/VisuallyHidden';
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
   * モーダルボディ部分のスクロールを許可するかどうか
   * @default true
   */
  bodyScroll?: boolean;
  /**
   * ネイティブ要素のid属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定
   */
  ariaLabelledby?: string;
  /**
   * ヒーローエリア（見出しの更に上）に配置するコンテンツ
   */
  hero?: ReactNode;
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
  bodyScroll = true,
  ariaLabelledby,
  hero,
  ...props
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  const initialFocusRef = useRef(null);

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
        initialFocus={initialFocusRef}
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
          <div
            className={clsx(styles.dialog, {
              [styles.fullscreen]: fullscreen,
              [styles.bodyScroll]: bodyScroll,
            })}
          >
            {header === undefined ? (
              <VisuallyHidden tabIndex={-1} ref={initialFocusRef}>
                ダイアログ
              </VisuallyHidden>
            ) : null}
            {hero !== undefined ? <div className={styles.hero}>{hero}</div> : null}
            <div
              className={clsx(styles.mainContent, {
                [styles.headerLess]: header === undefined && hero === undefined,
                [styles.fullscreen]: fullscreen,
              })}
            >
              {header !== undefined ? (
                <Dialog.Title tabIndex={-1} ref={initialFocusRef} className={styles.header}>
                  {header}
                </Dialog.Title>
              ) : null}
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
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
