import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Input } from './Input';

describe('Input', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input name="test" defaultValue="test" ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
    expect(ref.current?.type).toBe('text');
  });
});
