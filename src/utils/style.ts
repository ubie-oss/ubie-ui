type Opacity = 'normal' | 'darker';
export const opacityToClassName = (opacity: Opacity) => {
  let className;
  switch (opacity) {
    case 'normal':
      className = 'normalOverlay';
      break;
    case 'darker':
      className = 'darkerOverlay';
      break;
  }
  return className;
};
