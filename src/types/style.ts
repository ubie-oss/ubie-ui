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
   */
  pt?: Spacing;
  /**
   * padding-rightの値。Spacing Tokenのキーを指定
   */
  pr?: Spacing;
  /**
   * padding-bottomの値。Spacing Tokenのキーを指定
   */
  pb?: Spacing;
  /**
   * padding-leftの値。Spacing Tokenのキーを指定
   */
  pl?: Spacing;
};

export type MarginProps = {
  /**
   * margin-topの値。Spacing Tokenのキーを指定
   */
  mt?: Spacing;
  /**
   * margin-rightの値。Spacing Tokenのキーを指定
   */
  mr?: Spacing;
  /**
   * margin-bottomの値。Spacing Tokenのキーを指定
   */
  mb?: Spacing;
  /**
   * margin-leftの値。Spacing Tokenのキーを指定
   */
  ml?: Spacing;
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
   */
  radius?: Radius;
};

export type BackgroundColor = 'primary' | 'primaryDarken' | 'accent' | 'accentDarken' | 'alert' | 'gray' | 'white';
