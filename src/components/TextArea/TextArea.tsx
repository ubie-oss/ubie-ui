import clsx from 'clsx';
import { FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.scss';

type Props = {
  isInvalid?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<Props> = ({ isInvalid = false, className, ...props }) => {
  const _className = clsx({ [styles.isInvalid]: isInvalid }, styles.textArea, className);

  return <textarea {...props} className={_className} />;
};
