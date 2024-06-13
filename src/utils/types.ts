export type AllOrNone<T> = T | Partial<Record<keyof T, undefined>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any ? Omit<T, TOmitted> : never;

export type HTMLTagname = keyof HTMLElementTagNameMap;
