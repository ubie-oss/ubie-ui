import { forwardRef } from 'react';

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

export const fixedForwardRef: FixedForwardRef = forwardRef as FixedForwardRef;
