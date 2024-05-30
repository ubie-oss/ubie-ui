import * as Icons from '@ubie/ubie-icons';
import styles from './Icon.module.css';
import { TextColor } from '../../types/style';
import { colorVariable } from '../../utils/style';
import type { FC, CSSProperties } from 'react';

type Icon = keyof typeof Icons;

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const toIconSizeEmValue = (size: IconSize): string => {
  switch (size) {
    case 'xs':
      return '1em';
    case 'sm':
      return '1.25em';
    case 'md':
      return '1.5em';
    case 'lg':
      return '1.75em';
    case 'xl':
      return '2em';
    case '2xl':
      return '4em';
    case '3xl':
      return '5em';
    case '4xl':
      return '6.5em';
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = size;
      throw new Error(`Unknown size: ${_}`);
  }
};

type BaseProps = {
  /**
   * アイコンの種類
   */
  icon: Icon;
  /**
   * 色。指定しない場合はinheritとなり、親要素のfont-colorを継承します
   */
  color?: TextColor;
  /**
   * サイズ
   * @default md
   */
  size?: IconSize;
  /**
   * ariaHiddenがfalseの場合、アイコンはテキスト情報が必要です。labelを指定してください
   * @default false
   */
  ariaHidden?: boolean;
  /**
   * アイコンが何を表すかを説明するテキスト
   */
  label: string;
};

type CaseDecorative = {
  /**
   * ariaHiddenがfalseの場合、アイコンはテキスト情報が必要です。labelを指定してください
   * @default false
   */
  ariaHidden: true;
};

type CaseInformative = {
  /**
   * ariaHiddenがfalseの場合、アイコンはテキスト情報が必要です。labelを指定してください
   * @default false
   */
  ariaHidden?: false;
  /**
   * アイコンが何を表すかを説明するテキスト
   */
  label: string;
};

type DecorativeIcon = Omit<BaseProps, 'ariaHidden' | 'label'> & CaseDecorative;
type InformativeIcon = Omit<BaseProps, 'ariaHidden' | 'label'> & CaseInformative;
type Props = DecorativeIcon | InformativeIcon;

/**
 * アイコンコンポーネント。個別のアイコンと比べ、最適化されています
 */
export const Icon: FC<Props> = ({ icon, color, size = 'md', ariaHidden = false, label }) => {
  const IconComponent = Icons[icon];
  const _sizeValue = toIconSizeEmValue(size);
  return (
    <IconComponent
      aria-hidden={ariaHidden}
      aria-label={label}
      className={styles.icon}
      style={
        {
          ...colorVariable(color),
          '--size': _sizeValue,
        } as CSSProperties
      }
    />
  );
};
