import { render } from '@testing-library/react';
import { createRef } from 'react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('access to DOM through ref prop', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <RadioButton
        name="test"
        value="test"
        ref={ref}
        onChange={() => {
          /**/
        }}
        checked={false}
      >
        Test
      </RadioButton>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
    expect(ref.current?.type).toBe('radio');
  });
});
