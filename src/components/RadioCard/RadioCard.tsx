'use client';

import { clsx } from 'clsx';
import { FC, forwardRef } from 'react';
import styles from './RadioCard.module.css';

type Props = Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'value' | 'children'>> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    hasMarginBottom?: boolean;
    block?: boolean;
  };

/**
 * アクセシビリティに配慮したラジオボタン。
 * TimeQuestionContentのような、選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用する。
 *
 * @param id 必ずページ内でユニークな名前をつける。
 * @param name グループ化（排他制御）したい要素には同じ名前をつける。
 * @param value onChangeに渡す関数内で取得したい値
 * @param children 表示するラベルテキスト
 * @param hasMarginBottom marginBottomを持つか否か
 * @param block 幅100%
 * @param otherProps onFocusなど、inputタグに渡せるpropsはなんでも。
 */
const RadioCard: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ id, name, value, children, className, hasMarginBottom = true, block = false, ...otherProps }, ref) => {
    return (
      <div className={clsx(hasMarginBottom && styles.marginBottom, styles.wrap, block && styles.block)}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className={clsx(className, styles.radio)}
          {...otherProps}
          ref={ref}
        />
        <label htmlFor={id} className={styles.label}>
          {children}
        </label>
      </div>
    );
  },
);

RadioCard.displayName = 'RadioCard';

export { RadioCard };
