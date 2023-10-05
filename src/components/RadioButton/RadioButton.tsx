import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.css';

type RadioProps = Required<
  Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'onChange' | 'value' | 'checked' | 'children'>
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

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
      <label htmlFor={id} className={styles.label}>
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
        <span className={styles.icon} />
        <span className={styles.text}>{children}</span>
      </label>
    </div>
  );
};
