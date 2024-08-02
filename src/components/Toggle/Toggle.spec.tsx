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
    const { getByTestId } = render(<Toggle name="test" value="test" data-testid="switch" />);
    const element = getByTestId('switch');
    expect(element.getAttribute('role')).toBe('switch');
  });

  it('receives id', async () => {
    const ref = createRef<HTMLInputElement>();
    render(<Toggle ref={ref} name="test" value="test" id="toggle" />);
    expect(ref.current?.getAttribute('id')).toBe('toggle');
  });
});
