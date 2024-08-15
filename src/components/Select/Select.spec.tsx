import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Select } from './Select';

describe('Select', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref}>Test</Select>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SELECT');
  });

  it('receives data attributes', async () => {
    render(<Select data-testid="select">Test</Select>);
    const select = await screen.findByTestId('select');
    expect(select).toBeInTheDocument();
  });
});
