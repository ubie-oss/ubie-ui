import * as Icons from '@ubie/ubie-icons';
import styles from './Icon.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
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
   * ネイティブの`id`属性。ページで固有のIDを指定
   */
  id?: string;
} & CustomDataAttributeProps;

type DecorativeIcon = BaseProps & {
  /**
   * ariaHiddenがfalseの場合、アイコンはテキスト情報が必要です。labelを指定してください
   * @default false
   */
  ariaHidden: true;
};

type InformativeIcon = BaseProps & {
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
type Props = DecorativeIcon | InformativeIcon;

const extranctProps = (props: Props) => {
  if (props.ariaHidden) {
    const { icon, color, size = 'md', ariaHidden = false, ...otherProps } = props;
    return {
      icon,
      color,
      size,
      ariaHidden,
      label: undefined,
      ...otherProps,
    };
  } else {
    const { icon, color, size = 'md', ariaHidden = false, label, ...otherProps } = props;
    return {
      icon,
      color,
      size,
      ariaHidden,
      label,
      ...otherProps,
    };
  }
};

/**
 * アイコンコンポーネント。個別のアイコンと比べ、最適化されています
 */
export const Icon: FC<Props> = (props) => {
  const { icon, color, size = 'md', ariaHidden = false, label, ...otherProps } = extranctProps(props);

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
      {...otherProps}
    />
  );
};
