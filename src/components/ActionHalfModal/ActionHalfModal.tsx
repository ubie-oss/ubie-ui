'use client';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { clsx } from 'clsx';
import { type FC, Fragment, type ReactNode, useCallback, useRef } from 'react';
import styles from './ActionHalfModal.module.css';
import { useScrollable } from '../../hooks/useScrollable';
import { VisuallyHidden } from '../../sharedComponents/VisuallyHidden/VisuallyHidden';
import { CustomDataAttributeProps } from '../../types/attributes';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';
import { Button } from '../Button/Button';

type Opacity = 'normal' | 'darker';

type BaseProps = {
  /**
   * コンテンツとして表示する内容
   */
  children: ReactNode;
  /**
   * 閉じるアクションが実行された場合のコールバック
   */
  onClose: () => void;
  /**
   * ヘッダーに表示する見出しテキストまたはReactノード
   */
  header?: ReactNode;
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
   */
  isStatic?: boolean;
  /**
   * モーダルをフルスクリーンで表示するかどうか
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
  /**
   * ヒーローエリア（見出しの更に上）に配置するコンテンツ
   */
  hero?: ReactNode;
  /**
   * ヘッダーを固定表示
   */
  stickyHeader?: boolean;
  /**
   * フッターを固定表示
   */
  stickyFooter?: boolean;
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

export const ActionHalfModal: FC<Props> = ({
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
  hero,
  stickyHeader = false,
  stickyFooter = false,
  ...props
}) => {
  const opacityClassName = opacityToClassName(overlayOpacity);

  const initialFocusRef = useRef(null);

  const dialogRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && (header == null || header === undefined) && ariaLabelledby != null) {
        node.setAttribute('aria-labelledby', ariaLabelledby);
      } else if (node !== null && (header == null || header === undefined) && ariaLabelledby == null) {
        node.removeAttribute('aria-labelledby');
      }
    },
    [ariaLabelledby, header],
  );

  const { scrollContainerRef, canScrollUp, canScrollDown } = useScrollable();

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
        <TransitionChild
          as={Fragment}
          enter={styles.overlayEnter}
          enterFrom={styles.overlayEnterFrom}
          enterTo={styles.overlayEnterTo}
          leave={styles.overlayLeave}
          leaveFrom={styles.overlayLeaveFrom}
          leaveTo={styles.overlayLeaveTo}
        >
          <div className={clsx(styles.overlay, styles[opacityClassName])} />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter={styles.panelEnter}
          enterFrom={styles.panelEnterFrom}
          enterTo={styles.panelEnterTo}
          leave={styles.panelLeave}
          leaveFrom={styles.panelLeaveFrom}
          leaveTo={styles.panelLeaveTo}
        >
          <DialogPanel
            className={clsx(styles.dialog, {
              [styles.fullscreen]: fullscreen,
            })}
          >
            {header === undefined || header === null ? (
              <VisuallyHidden as="p" tabIndex={-1} ref={initialFocusRef}>
                ダイアログ
              </VisuallyHidden>
            ) : null}
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
              <div
                className={clsx(styles.mainContent, {
                  [styles.headerLess]: (header === undefined || header === null) && hero === undefined,
                  [styles.fullscreen]: fullscreen,
                })}
              >
                {hero !== undefined ? <div className={styles.hero}>{hero}</div> : null}
                {header !== undefined && header !== null ? (
                  <Dialog.Title
                    tabIndex={-1}
                    ref={initialFocusRef}
                    className={clsx(styles.header, stickyHeader && styles.sticky, canScrollUp && styles.canScroll)}
                  >
                    {header}
                  </Dialog.Title>
                ) : null}
                <div
                  className={clsx(styles.body, {
                    [styles.fullscreen]: fullscreen,
                  })}
                >
                  {children}
                </div>
                <div
                  className={clsx(
                    styles.buttonContainer,
                    stickyFooter && styles.sticky,
                    canScrollDown && styles.canScroll,
                  )}
                >
                  {onPrimaryAction && primaryActionLabel && (
                    <Button
                      block
                      onClick={onPrimaryAction}
                      aria-label={primaryActionLabel}
                      variant={primaryActionColor}
                    >
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
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};
