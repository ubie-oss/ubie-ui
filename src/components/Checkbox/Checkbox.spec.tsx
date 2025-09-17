import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <Checkbox name="test" value="test" ref={ref}>
        Test
      </Checkbox>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
    expect(ref.current?.type).toBe('checkbox');
  });
});
