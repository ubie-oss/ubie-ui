export type AllOrNone<T> = T | Partial<Record<keyof T, undefined>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any ? Omit<T, TOmitted> : never;

export type HTMLTagname = keyof HTMLElementTagNameMap;

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

export type CSSWitdh =
  | CSSLength
  | CSSPercentage
  | 'auto'
  | 'fit-content'
  | `fit-content(${CSSLengthPercentage})`
  | 'min-content'
  | 'max-content'
  | CSSVariable;

export type CSSMaxWidth =
  | 'none'
  | CSSLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | `fit-content(${CSSLengthPercentage})`
  | CSSVariable;

export type CSSMinWidth =
  | 'auto'
  | CSSLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | `fit-content(${CSSLengthPercentage})`
  | CSSVariable;
