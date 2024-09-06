'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, PropsWithChildren, type ReactNode, useCallback, useRef } from 'react';
import styles from './MessageModal.module.css';
import { Button } from '../../';
import { useScrollable } from '../../hooks/useScrollable';
import { VisuallyHidden } from '../../sharedComponents/VisuallyHidden/VisuallyHidden';
import { CustomDataAttributeProps } from '../../types/attributes';
import { opacityToClassName } from '../../utils/style';

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
} & PropsWithChildren &
  CustomDataAttributeProps;

export const MessageModal: FC<Props> = ({
  header,
  children,
  onClose,
  overlayOpacity = 'normal',
  closeLabel = '閉じる',
  fixedHeight = false,
  open = true,
  isStatic = false,
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
      <Dialog
        ref={dialogRef}
        static={isStatic}
        onClose={onClose}
        className={styles.modal}
        initialFocus={initialFocusRef}
        {...otherProps}
      >
        <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
        <div
          className={clsx(styles.dialog, {
            [styles.fixedHeight]: fixedHeight,
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
                [styles.fixedHeight]: fixedHeight,
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
              <div
                className={clsx(styles.body, {
                  [styles.fixedHeight]: fixedHeight,
                })}
              >
                {children}
              </div>
              <footer className={clsx(styles.footer, stickyFooter && styles.sticky, canScrollDown && styles.canScroll)}>
                <Button block onClick={onClose} aria-label={closeLabel}>
                  {closeLabel}
                </Button>
              </footer>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
