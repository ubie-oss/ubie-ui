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
   * padding-topの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pt?: Spacing;
  /**
   * padding-rightの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pr?: Spacing;
  /**
   * padding-bottomの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pb?: Spacing;
  /**
   * padding-leftの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  pl?: Spacing;
};

export type MarginProps = {
  /**
   * margin-topの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mt?: Spacing;
  /**
   * margin-rightの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mr?: Spacing;
  /**
   * margin-bottomの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mb?: Spacing;
  /**
   * margin-leftの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  ml?: Spacing;
};

export type MarginYProps = {
  /**
   * margin-topの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mt?: Spacing;
  /**
   * margin-bottomの値。Spacing Tokenのキーを指定
   * xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px
   */
  mb?: Spacing;
};

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

export type BackgroundColor = 'primary' | 'primaryDarken' | 'accent' | 'accentDarken' | 'alert' | 'gray' | 'white';
