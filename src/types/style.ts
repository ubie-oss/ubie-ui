export type FontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextType = 'body' | 'heading' | 'button' | 'tag';

export type Leading = 'default' | 'narrow' | 'wide';

export type Hue = 'black' | 'blue' | 'pink' | 'orange' | 'purple' | 'green' | 'red';

export type TextColorVariant = 'main' | 'sub' | 'link' | 'linkSub' | 'disabled' | 'white' | Hue | `${Hue}Darken`;

export type TextColorTokenKey =
  | 'text-main'
  | 'text-sub'
  | 'text-link'
  | 'text-link-sub'
  | 'text-disabled'
  | 'text-white'
  | `text-${Hue}`
  | `text-${Hue}-darken`;

export type BodyFontSize = Extract<FontSize, 'xs' | 'sm' | 'md' | 'lg'>;

export type BodyLeading = Extract<Leading, 'default' | 'narrow' | 'wide'>;

export type HeadingFontSize = Extract<FontSize, 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export type HeadingLeading = Extract<Leading, 'default' | 'wide'>;

export type ButtonFontSize = Extract<FontSize, 'sm' | 'md' | 'lg'>;

export type ButtonLeading = Extract<Leading, 'default'>;

export type TagFontSize = Extract<FontSize, 'md' | 'lg'>;

export type TagLeading = Extract<Leading, 'default'>;

export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type PaddingProps = {
  /**
   * 四方のパディングを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  p?: Spacing;
  /**
   * 水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  px?: Spacing;
  /**
   * 垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  py?: Spacing;
  /**
   * 上方向のパディング。Spacing Tokenのキーを指定
   */
  pt?: Spacing;
  /**
   * 右方向のパディング。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pr?: Spacing;
  /**
   * 下方向のパディング。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pb?: Spacing;
  /**
   * 左方向のパディング。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pl?: Spacing;
};

export type MarginProps = {
  /**
   * 四方のマージンを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  m?: Spacing;
  /**
   * 水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mx?: Spacing;
  /**
   * 垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  my?: Spacing;
  /**
   * 上方向のマージン。Spacing Tokenのキーを指定
   */
  mt?: Spacing;
  /**
   * 右方向のマージン。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mr?: Spacing;
  /**
   * 下方向のマージン。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mb?: Spacing;
  /**
   * 左方向のマージン。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  ml?: Spacing;
};

export type MarginYProps = Pick<MarginProps, 'my' | 'mt' | 'mb'>;

export type FlexDirection = 'row' | 'column';

export type AlignItems = 'normal' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export type JustifyContent =
  | 'normal'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type Radius = 'xs' | 'sm' | 'md' | 'lg';

export type RadiusProp = {
  /**
   * 角丸を指定。Radius Tokenのキーを指定
   * xs=2px,sm=4px,md=8px,lg=12px
   */
  radius?: Radius;
};

export type BackgroundColorVariant = 'white' | Hue | `${Hue}Darken` | `${Hue}Inverse` | `${Hue}InverseDarken`;

export type BackgroundColorTokenKey =
  | 'background-white'
  | `background-${Hue}`
  | `background-${Hue}-darken`
  | `background-${Hue}-inverse`
  | `background-${Hue}-inverse-darken`;

export type BorderColorTokenKey = `border-${Hue}` | `border-${Hue}-darken`;

export type BorderVariant = Hue | `${Hue}Darken` | `${Hue}Thick` | `${Hue}DarkenThick`;

export type IconColorVariant = 'white' | Hue;

export type CSSVariable = `var(--${string})`;

// ref: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
export type CSSLength =
  | `${string}cap`
  | `${string}ch`
  | `${string}em`
  | `${string}ex`
  | `${string}ic`
  | `${string}lh`
  | `${string}rcap`
  | `${string}rem`
  | `${string}rex`
  | `${string}ric`
  | `${string}rlh`
  | `${string}vh`
  | `${string}vmax`
  | `${string}vmin`
  | `${string}vw`
  | `${string}vb`
  | `${string}vi`
  | `${string}cqw`
  | `${string}cqh`
  | `${string}cqi`
  | `${string}cqb`
  | `${string}cqmin`
  | `${string}cqmax`
  | `${string}px`
  | `${string}cm`
  | `${string}mm`
  | `${string}q`
  | `${string}in`
  | `${string}pc`
  | `${string}pt`;

export type CSSPercentage = `${string}%`;

export type CSSLengthPercentage = CSSLength | CSSPercentage;

export type CSSWidth =
  | 'auto'
  | CSSLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | `fit-content(${CSSLengthPercentage})`
  | CSSVariable;

export type CSSMaxWidth =
  | 'none'
  | CSSLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | `fit-content(${CSSLengthPercentage})`
  | CSSVariable;

export type CSSMinWidth = CSSWidth;

export type WidthProps = {
  /**
   * 幅を指定
   * @default auto
   */
  width?: CSSWidth;
  /**
   * 最小幅
   * @default auto
   */
  minWidth?: CSSMinWidth;
  /**
   * 最大幅
   * @default none
   */
  maxWidth?: CSSMaxWidth;
};

export type CSSHeight = CSSWidth;

export type CSSMaxHeight = CSSMaxWidth;

export type CSSMinHeight = CSSHeight;

export type HeightProps = {
  /**
   * 高さを指定
   * @default auto
   */
  height?: CSSHeight;
  /**
   * 最小高さ
   * @default auto
   */
  minHeight?: CSSMinHeight;
  /**
   * 最大高さ
   * @default none
   */
  maxHeight?: CSSMaxHeight;
};
