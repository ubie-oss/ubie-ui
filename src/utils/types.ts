export type AllOrNone<T> = T | Partial<Record<keyof T, undefined>>;

export type HTMLTagname = keyof HTMLElementTagNameMap;
