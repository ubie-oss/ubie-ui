'use client';

import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ComponentPropsWithRef, type FC, Fragment, type ReactNode, useCallback, useRef } from 'react';
import styles from './ActionModal.module.css';
import { Button } from '../../';
import { VisuallyHidden } from '../../sharedComponents/VisuallyHidden/VisuallyHidden';
import { opacityToClassName } from '../../utils/style';
import { AllOrNone } from '../../utils/types';

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

type Props = BaseProps & AllOrNone<SecondaryActionProps> & Omit<ComponentPropsWithRef<'div'>, 'className'>;

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
        aria-labelledby={ariaLabelledby}
        initialFocus={initialFocusRef}
        {...props}
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
          {hero !== undefined ? <div className={styles.hero}>{hero}</div> : null}
          <div
            className={clsx(styles.mainContent, {
              [styles.headerLess]: header === undefined && hero === undefined,
              [styles.fixedHeight]: fixedHeight,
            })}
          >
            {header !== undefined ? (
              <Dialog.Title tabIndex={-1} ref={initialFocusRef} className={styles.header}>
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
        </div>
      </Dialog>
    </Transition>
  );
};
