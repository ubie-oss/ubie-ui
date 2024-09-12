'use client';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, Fragment, PropsWithChildren, ReactNode, useCallback, useRef } from 'react';
import styles from './MessageHalfModal.module.css';
import { useScrollable } from '../../hooks/useScrollable';
import { VisuallyHidden } from '../../sharedComponents/VisuallyHidden/VisuallyHidden';
import { CustomDataAttributeProps } from '../../types/attributes';
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
   * heroが指定されている場合は無効
   */
  stickyHeader?: boolean;
  /**
   * フッターを固定表示
   */
  stickyFooter?: boolean;
} & CustomDataAttributeProps;

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
  ariaLabelledby,
  hero,
  stickyHeader = false,
  stickyFooter = false,
  ...otherProps
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

  const { scrollContainerRef, canScrollUp, canScrollDown } = useScrollable();

  return (
    <Transition show={open}>
      <Dialog
        ref={dialogRef}
        static={isStatic}
        onClose={onClose}
        className={clsx(styles.modal, fullscreen && styles.fullscreen)}
        initialFocus={initialFocusRef}
        {...otherProps}
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
            })}
          >
            {header === undefined ? (
              <VisuallyHidden as="p" tabIndex={-1} ref={initialFocusRef}>
                ダイアログ
              </VisuallyHidden>
            ) : null}
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
              <div
                className={clsx(styles.mainContent, {
                  [styles.headerLess]: header === undefined && hero === undefined,
                  [styles.fullscreen]: fullscreen,
                })}
              >
                {hero !== undefined ? <div className={styles.hero}>{hero}</div> : null}
                {header !== undefined ? (
                  <Dialog.Title
                    tabIndex={-1}
                    ref={initialFocusRef}
                    className={clsx(
                      styles.header,
                      !hero && stickyHeader && styles.sticky,
                      canScrollUp && styles.canScroll,
                    )}
                  >
                    {header}
                  </Dialog.Title>
                ) : null}
                <div className={clsx(styles.body, { [styles.fullscreen]: fullscreen })}>{children}</div>
                <div
                  className={clsx(
                    styles.buttonContainer,
                    showClose && stickyFooter && styles.sticky,
                    showClose && canScrollDown && styles.canScroll,
                  )}
                >
                  {showClose && (
                    <Button variant="primary" onClick={onClose} aria-label={closeLabel}>
                      {closeLabel}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
