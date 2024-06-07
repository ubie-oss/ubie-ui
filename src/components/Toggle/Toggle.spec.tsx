import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Toggle name="test" value="test" ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
    expect(ref.current?.type).toBe('checkbox');
  });

  it('has switch role', () => {
    const { getByRole } = render(<Toggle name="test" value="test" />);
    expect(getByRole('switch')).toBeInTheDocument();
  });
});
