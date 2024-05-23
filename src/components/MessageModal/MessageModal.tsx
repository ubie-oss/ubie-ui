'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import {FC, Fragment, PropsWithChildren, useCallback, useRef} from 'react';
import styles from './MessageModal.module.css';
import { Button } from '../../';
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
      <Dialog ref={dialogRef} static={isStatic} onClose={onClose} className={styles.modal} initialFocus={initialFocusRef} {...otherProps}>
        <Dialog.Overlay className={clsx(styles.overlay, styles[opacityClassName])} />
        <div className={clsx(styles.modalBody, fixedHeight && styles.fixedHeight)}>
          {header && <Dialog.Title tabIndex={-1} ref={initialFocusRef} className={styles.header}>{header}</Dialog.Title>}
          <div tabIndex={-1} ref={header == null ? initialFocusRef : null} className={styles.contents}>{children}</div>
          <Button block onClick={onClose} aria-label={closeLabel}>
            {closeLabel}
          </Button>
        </div>
      </Dialog>
    </Transition>
  );
};
