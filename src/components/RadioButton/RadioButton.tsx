import { FC } from 'react';
import styles from './RadioButton.module.scss';

type Props = Required<
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'onChange' | 'value' | 'checked' | 'children'>
> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton: FC<Props> = ({ checked, onChange, value, id, name, children, ...otherProps }) => {
  return (
    <div className={styles.container}>
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
