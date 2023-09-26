import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.css';

type RadioProps = Required<
  Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'onChange' | 'value' | 'checked' | 'children'>
> &
  InputHTMLAttributes<HTMLInputElement>;

type Props = {
  size?: 'medium' | 'small';
} & RadioProps;

export const RadioButton: FC<Props> = ({
  size = 'medium',
  checked,
  onChange,
  value,
  id,
  name,
  children,
  ...otherProps
}) => {
  return (
    <div className={clsx(styles.container, styles[size])}>
      <input
        type="radio"
        id={id}
        checked={checked}
        name={name}
        value={value}
        className={styles.radio}
        onChange={onChange}
        {...otherProps}
      />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.icon} />
        {children}
      </label>
    </div>
  );
};
