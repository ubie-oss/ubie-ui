export type Opacity = 'normal' | 'darker';
export const opacityToClassName = (opacity: Opacity) => {
  switch (opacity) {
    case 'normal':
      return 'normalOverlay';
    case 'darker':
      return 'darkerOverlay';
  }
};
