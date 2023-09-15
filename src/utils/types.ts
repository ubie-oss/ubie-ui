export type AllOrNone<T> = T | Partial<Record<keyof T, undefined>>;
