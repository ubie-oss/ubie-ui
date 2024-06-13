export type AllOrNone<T> = T | Partial<Record<keyof T, undefined>>;

export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any ? Omit<T, TOmitted> : never;

export type HTMLTagname = keyof HTMLElementTagNameMap;
