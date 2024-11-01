import * as Icons from '@ubie/ubie-icons';
import styles from './Icon.module.css';
import { CustomDataAttributeProps } from '../../types/attributes';
import { TextColor } from '../../types/style';
import { colorVariable } from '../../utils/style';
import type { CSSProperties, FC } from 'react';

type Icon = keyof typeof Icons;

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
type IconSizeAlias = '2xl' | '3xl' | '4xl';
type SizeProp = IconSize | IconSizeAlias;

const toIconSizeEmValue = (size: IconSize): string => {
  switch (size) {
    case 'xs':
      return '1rem';
    case 'sm':
      return '1.25rem';
    case 'md':
      return '1.5rem';
    case 'lg':
      return '1.75rem';
    case 'xl':
      return '2rem';
    case 'xxl':
      return '4rem';
    case 'xxxl':
      return '5rem';
    case 'xxxxl':
      return '6.5rem';
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = size;
      throw new Error(`Unknown size: ${_}`);
  }
};

const normalizeSize = (icon: IconSize | IconSizeAlias): IconSize => {
  switch (icon) {
    case '2xl':
      return 'xxl';
    case '3xl':
      return 'xxxl';
    case '4xl':
      return 'xxxxl';
    default:
      return icon;
  }
};

type Props = {
  /**
   * アイコンの種類
   */
  icon: Icon;
  /**
   * 色。指定しない場合はinheritとなり、親要素のcolorプロパティを継承します
   */
  color?: TextColor;
  /**
   * サイズ
   * xs=16px, sm=20px, md=24px, lg=28px, xl=32px, xxl=64px, xxxl=80px, xxxxl=104px
   * 2xl、3xl、4xlはdeprecatedな指定となります
   * @default md
   */
  size?: SizeProp;
  /**
   * ネイティブの`id`属性。ページで固有のIDを指定
   */
  id?: string;
  /**
   * アイコンが何を表すかを説明するテキスト
   * 単に装飾的なアイコンの場合は指定しない
   */
  label?: string;
} & CustomDataAttributeProps;

/**
 * アイコンコンポーネント。labelを指定しない場合は単に装飾的なアイコンであるとみなされ、aria-hiddenが付与されます
 */
export const Icon: FC<Props> = ({ icon, color, size = 'md', label, ...otherProps }) => {
  const IconComponent = Icons[icon];
  const _sizeValue = toIconSizeEmValue(normalizeSize(size));
  return (
    <IconComponent
      role="img"
      aria-hidden={label === undefined || label === '' ? true : undefined}
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
