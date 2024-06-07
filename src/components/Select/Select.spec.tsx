import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Select } from './Select';

describe('Select', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref}>Test</Select>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SELECT');
  });
});
