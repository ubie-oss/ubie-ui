export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextType = 'body' | 'heading' | 'note' | 'button' | 'tag';

export type Leading = 'default' | 'narrow' | 'tight';

export type TextColor = 'main' | 'sub' | 'link' | 'linkSub' | 'disabled' | 'primary' | 'accent' | 'alert' | 'white';

export type BodyFontSize = Extract<FontSize, 'sm' | 'md' | 'lg'>;

export type BodyLeading = Extract<Leading, 'default' | 'narrow' | 'tight'>;

export type HeadingFontSize = Extract<FontSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export type HeadingLeading = Extract<Leading, 'default'>;

export type NoteFontSize = Extract<FontSize, 'sm' | 'md' | 'lg'>;

export type NoteLeading = Extract<Leading, 'default' | 'narrow' | 'tight'>;

export type ButtonFontSize = Extract<FontSize, 'sm' | 'md' | 'lg'>;

export type ButtonLeading = Extract<Leading, 'default'>;

export type TagFontSize = Extract<FontSize, 'sm' | 'md' | 'lg'>;

export type TagLeading = Extract<Leading, 'default'>;

export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type PaddingProps = {
  /**
   * 四方のパディングを一括で設定。Spacing Tokenのキーを指定\
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
   */
  pr?: Spacing;
  /**
   * 下方向のパディング。Spacing Tokenのキーを指定
   */
  pb?: Spacing;
  /**
   * 左方向のパディング。Spacing Tokenのキーを指定
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
   */
  mr?: Spacing;
  /**
   * 下方向のマージン。Spacing Tokenのキーを指定
   */
  mb?: Spacing;
  /**
   * 左方向のマージン。Spacing Tokenのキーを指定
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
   */
  radius?: Radius;
};

export type BackgroundColor = 'primary' | 'primaryDarken' | 'accent' | 'accentDarken' | 'alert' | 'gray' | 'white';
