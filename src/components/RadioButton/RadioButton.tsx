import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.css';

type RadioProps = Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'>> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'children' | 'value' | 'name'>;

type Props = {
  /**
   * グループ化（排他制御）したい要素には同じ名前をつける
   */
  name: Required<React.InputHTMLAttributes<HTMLInputElement>['name']>;
  /**
   * 選択時のコールバックで渡される値
   */
  value: Required<React.InputHTMLAttributes<HTMLInputElement>['value']>;
  /**
   * ラベルに表示されるテキストまたは要素
   */
  children: Required<InputHTMLAttributes<HTMLInputElement>['children']>;
  /**
   * サイズ
   */
  size?: 'medium' | 'small';
} & RadioProps;

export const RadioButton: FC<Props> = ({
  size = 'medium',
  checked,
  onChange,
  value,
  name,
  children,
  ...otherProps
}) => {
  return (
    <div className={clsx(styles.container, styles[size])}>
      <label className={styles.label}>
        <input
          type="radio"
          checked={checked}
          name={name}
          value={value}
          className={styles.radio}
          onChange={onChange}
          {...otherProps}
        />
        <span className={styles.icon} />
        <span className={styles.text}>{children}</span>
      </label>
    </div>
  );
};
